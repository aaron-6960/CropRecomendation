from backend.myapi import app
import uvicorn 

if __name__ == "__main__":
    uvicorn.run("backend.myapi:app", port=8000, reload=True)