from fastapi import FastAPI
from prediction import predict_crop
from pydantic import BaseModel

app = FastAPI()


class Features(BaseModel):
    N: int
    P: int
    K: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.get("/")
def index():
    return 12


@app.post("/prediction")
def Prediction(data: Features):
    prediction = predict_crop(data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall)
    print(prediction)
    return prediction

