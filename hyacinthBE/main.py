from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import doctor, nurse, employee, driver
from database import Global

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(employee.router)
app.include_router(doctor.router)
app.include_router(nurse.router)
app.include_router(driver.router)

cur = Global.cur


@app.get("/")
def read_root():
    return {"Hello": "Hyacinth"}
