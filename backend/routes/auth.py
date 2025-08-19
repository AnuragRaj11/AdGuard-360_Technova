from fastapi import APIRouter

router = APIRouter()

# Stub endpoints just to show shape (no real auth for free demo)
@router.post("/register")
def register(username: str, password: str):
    return {"message": "Registered (demo)", "user": {"username": username}}

@router.post("/login")
def login(username: str, password: str):
    return {"message": "Logged in (demo)", "token": "demo-token"}
