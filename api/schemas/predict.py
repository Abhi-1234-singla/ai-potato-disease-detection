from pydantic import BaseModel

class PingResponse(BaseModel):
    message: str

class PredictResponse(BaseModel):
    success: bool
    prediction: str
    confidence: float
    message: str

class ErrorResponse(BaseModel):
    success: bool
    message: str
