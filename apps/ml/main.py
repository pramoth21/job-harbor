from fastapi import FastAPI

app = FastAPI(title="Job Harbor ML Service")


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "job-harbor-ml",
    }