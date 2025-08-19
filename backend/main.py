from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, reports, leaderboard

app = FastAPI(title="AdGuard360 Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(reports.router, prefix="/reports", tags=["Reports"])
app.include_router(leaderboard.router, prefix="/leaderboard", tags=["Leaderboard"])

@app.get("/")
def root():
    return {"message": "AdGuard360 Backend running ✅"}
