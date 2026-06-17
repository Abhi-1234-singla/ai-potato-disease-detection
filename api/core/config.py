import os

class Settings:
    PROJECT_NAME: str = "Potato Leaf Disease Classification API"
    MODEL_PATH: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../saved_models/1.keras"))
    CORS_ORIGINS: list[str] = [
        "http://localhost:5173", # Vite default
        "http://localhost:3000", # Fallback
        "http://localhost",
    ]
    CLASS_NAMES: list[str] = ["Early Blight", "Late Blight", "Healthy"]

settings = Settings()
