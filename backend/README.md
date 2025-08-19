# Backend (FastAPI)

## Run
python -m venv .venv
# activate venv
pip install -r requirements.txt
uvicorn main:app --reload

## Endpoints
GET  /            -> health
POST /reports     -> upload image (multipart) + optional lat/lon/address/reporter
GET  /reports     -> list all reports
GET  /reports/{id}
GET  /leaderboard -> name + counts

Uploads served at /uploads/...
