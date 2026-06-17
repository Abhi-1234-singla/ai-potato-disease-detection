from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import uvicorn
import sys
import os

# Add the current directory to sys.path so modules can be imported
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from core.config import settings
from services.model_service import model_service
from routers import general, predict

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the ML model at startup
    model_service.load_model()
    yield
    # Clean up resources on shutdown
    model_service.model = None

app = FastAPI(
    title=settings.PROJECT_NAME,
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(general.router)
app.include_router(predict.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
