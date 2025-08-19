from pydantic import BaseModel, Field
from typing import Optional, Dict
from datetime import datetime

class Violations(BaseModel):
    size: bool
    placement: bool
    content: bool
    structural: bool
    confidence: float = 0.8

class Report(BaseModel):
    id: int
    created_at: datetime
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    address: Optional[str] = None
    reporter: Optional[str] = None
    image_url: str
    violations: Violations

class ReportCreate(BaseModel):
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    address: Optional[str] = None
    reporter: Optional[str] = None
