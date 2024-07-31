from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from prediction import predict_crop
import logging

app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Features(BaseModel):
    N: int
    P: int
    K: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.get("/")
async def index():
    return {"message": "Welcome to the Crop Prediction API"}

@app.post("/prediction", response_model=dict)
async def prediction(data: Features):
    try:
        result = predict_crop(data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall)
        logger.info(f"Prediction result: {result}")
        return {"prediction": result}
    except Exception as e:
        logger.error(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

