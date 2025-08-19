from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi import Request
from datetime import datetime
from typing import List, Optional
import os, shutil
from models import Report, ReportCreate, Violations
from utils import analyze_image

router = APIRouter()

# in-memory store for demo
REPORTS: List[Report] = []
NEXT_ID = 1

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def _next_id() -> int:
    global NEXT_ID
    nid = NEXT_ID
    NEXT_ID += 1
    return nid

@router.get("", response_model=List[Report])
def list_reports(request: Request):
    # Ensure public URLs for images
    base = str(request.base_url).rstrip("/")
    out = []
    for r in REPORTS:
        # already has URL; just append
        out.append(r)
    return out

@router.post("", response_model=Report)
async def create_report(
    request: Request,
    file: UploadFile = File(...),
    latitude: Optional[float] = Form(None),
    longitude: Optional[float] = Form(None),
    address: Optional[str] = Form(None),
    reporter: Optional[str] = Form(None),
):
    if file.content_type and not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Please upload an image file.")

    # Save file
    ts = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
    ext = os.path.splitext(file.filename or "")[1] or ".jpg"
    fname = f"report_{ts}{ext}"
    fpath = os.path.join(UPLOAD_DIR, fname)
    with open(fpath, "wb") as out:
        shutil.copyfileobj(file.file, out)

    # Run quick analysis
    v = analyze_image(fpath)
    violations = Violations(**v)

    # Build absolute URL for image
    base = str(request.base_url).rstrip("/")
    image_url = f"{base}/uploads/{fname}"

    report = Report(
        id=_next_id(),
        created_at=datetime.utcnow(),
        latitude=latitude,
        longitude=longitude,
        address=address,
        reporter=reporter,
        image_url=image_url,
        violations=violations
    )
    REPORTS.append(report)
    return report

@router.get("/{report_id}", response_model=Report)
def get_report(report_id: int):
    for r in REPORTS:
        if r.id == report_id:
            return r
    raise HTTPException(status_code=404, detail="Report not found")
