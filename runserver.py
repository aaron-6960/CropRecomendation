import os
import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))  # Default to 8000 if PORT is not set
    uvicorn.run("backend.myapi:app", host="0.0.0.0", port=port, reload=True)
