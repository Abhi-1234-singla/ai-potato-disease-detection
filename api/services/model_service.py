import numpy as np
import tensorflow as tf
from PIL import Image, UnidentifiedImageError
from io import BytesIO
from core.config import settings

class ModelService:
    def __init__(self):
        self.model = None

    def load_model(self):
        try:
            print(f"Loading model from {settings.MODEL_PATH}...")
            self.model = tf.keras.models.load_model(settings.MODEL_PATH)
            print("Model loaded successfully.")
        except Exception as e:
            print(f"Error loading model: {e}")
            raise e

    def read_file_as_image(self, data: bytes) -> np.ndarray:
        try:
            image = Image.open(BytesIO(data))
            # Convert to RGB to ensure 3 channels in case of RGBA/Grayscale
            image = image.convert("RGB")
            return np.array(image)
        except UnidentifiedImageError:
            raise ValueError("Invalid image file format")

    def predict(self, image_bytes: bytes) -> tuple[str, float]:
        if self.model is None:
            raise Exception("Model is not loaded.")
        
        try:
            image = self.read_file_as_image(image_bytes)
        except ValueError as e:
            raise e
            
        img_batch = np.expand_dims(image, 0)
        
        predictions = self.model.predict(img_batch)
        
        predicted_class = settings.CLASS_NAMES[np.argmax(predictions[0])]
        confidence = float(np.max(predictions[0]))
        
        # Return percentage confidence
        confidence_percentage = round(confidence * 100, 2)
        
        return predicted_class, confidence_percentage

model_service = ModelService()
