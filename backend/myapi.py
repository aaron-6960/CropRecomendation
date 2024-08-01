from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .prediction import predict_crop
import logging
from fastapi.middleware.cors import CORSMiddleware


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


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # List of origins allowed to make requests to this API
    allow_credentials=True,
    allow_methods=["*"],  # List of HTTP methods allowed (e.g., GET, POST, PUT, DELETE)
    allow_headers=["*"],  # List of HTTP headers allowed
)

@app.get("/")
def index():
    return {"message": "Welcome to the Crop Prediction API"}

@app.post("/", response_model=dict)
def prediction(data: Features):
    try:
        result = predict_crop(data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall)
        logger.info(f"Prediction result: {result}")
        return {"prediction": result}
    except Exception as e:
        logger.error(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    