from fastapi import FastAPI
from app.database import engine, Base
from app.routes import user_routes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(user_routes.router, prefix="/api/users", tags=["Users"])

@app.get("/")
def read_root():
    return {"message": "API is up and running!"}