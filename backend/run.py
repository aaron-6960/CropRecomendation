import os

os.chdir("backend")
os.system('uvicorn myapi:app --reload --host 0.0.0.0 &')
