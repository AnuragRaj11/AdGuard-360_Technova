from fastapi import APIRouter
from collections import Counter
from .reports import REPORTS

router = APIRouter()

@router.get("")
def leaderboard():
    names = [r.reporter or "Anonymous" for r in REPORTS]
    counts = Counter(names)
    ranked = sorted(counts.items(), key=lambda x: x[1], reverse=True)
    return [{"rank": i+1, "name": name, "count": count} for i, (name, count) in enumerate(ranked)]
