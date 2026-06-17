from fastapi import APIRouter, File, UploadFile, HTTPException
from schemas.predict import PredictResponse, ErrorResponse
from services.model_service import model_service
import traceback

router = APIRouter()

@router.post("/predict", response_model=PredictResponse, responses={400: {"model": ErrorResponse}, 500: {"model": ErrorResponse}})
async def predict(file: UploadFile = File(...)):
    # Validate file presence
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")
    
    # Read file content
    try:
        contents = await file.read()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error reading file: {str(e)}")

    # Check for empty file
    if len(contents) == 0:
        raise HTTPException(status_code=400, detail="Uploaded file is empty")

    try:
        # Predict
        predicted_class, confidence = model_service.predict(contents)
        
        return PredictResponse(
            success=True,
            prediction=predicted_class,
            confidence=confidence,
            message="Prediction completed successfully"
        )
    except ValueError as e:
        # Invalid image format or similar validation error
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        # Other unexpected errors
        print(f"Prediction Error: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail="Internal server error during prediction")
