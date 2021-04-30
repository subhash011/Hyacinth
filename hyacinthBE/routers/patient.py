from fastapi import APIRouter
from database import Global


router = APIRouter(
    prefix="/patient",
    tags=["patient"],
    responses={404: {"description": "Not found"}}
)

cur = Global.cur


@router.get('/')
def get_patient():
    res = []
    cur.execute(" select * from PatientInfo")
    for patientID, patientName, phone, email, _, sex, _, marital in cur:
        res.append({
            'ID': patientID,
            'name': patientName,
            'phone': phone,
            'email': email,
            'sex': sex
        })
    return res


@router.get('/{pk}')
def get_patient_info(pk):
    cur.execute(f"call PatientProfile({pk})")
    d = dict()
    for patientID, patientName, phone, email, address, sex, medicalHistory, marital in cur:
        d = {
            'id': patientID,
            'name': patientName,
            'phone': phone,
            'email': email,
            'address': address,
            'sex': sex,
            'medicalHistory': medicalHistory
        }
    return d


@router.post('/login')
def patient_login(email, password):
    pass


@router.post('/registration')
def patient_registration():
    pass
