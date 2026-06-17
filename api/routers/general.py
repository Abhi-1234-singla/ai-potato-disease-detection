from fastapi import APIRouter
from schemas.predict import PingResponse

router = APIRouter()

@router.get("/ping", response_model=PingResponse)
async def ping():
    return PingResponse(message="Hello, I am alive")

@router.get("/")
async def root():
    return {"message": "Welcome to Potato Leaf Disease Classification API"}
