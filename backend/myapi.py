from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
import logging
import httpx
import asyncio
from fastapi.middleware.cors import CORSMiddleware
from .prediction import predict_crop

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

# Function to ping another server
async def ping_server():
    while True:
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get("https://scam-1.onrender.com/")
                if response.status_code == 200:
                    logger.info("Successfully pinged the server.")
                else:
                    logger.error(f"Failed to ping the server: {response.status_code}")
        except Exception as e:
            logger.error(f"Error pinging the server: {e}")
        await asyncio.sleep(600)  # Wait for 10 minutes

# Start the ping server in the background
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(ping_server())

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
