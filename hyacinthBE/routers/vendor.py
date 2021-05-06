from fastapi import APIRouter
from database import Global

router = APIRouter(
    prefix="/vendor",
    tags=["vendor"],
    responses={404: {"description": "Not found"}}
)

cur = Global.cur


@router.get('/')
def get_vendors():
    res = []
    cur.execute("select * from Vendor")
    for ID, name, phone, address, email in cur:
        res.append({
            'id': ID,
            'name': name,
            'phone': phone,
            'email': email,
            'address': address
        })
    return {
        'data': res,
        'key': ['ID', 'Name', 'Phone', 'Email', 'Address']
    }


# @router.get('/{pk}')
# def get_doctor_info(pk):
#     cur.execute(f"select * from VendorDrugInfo where vendorID={pk}")
#     res = []
#     for ID, qual, lic, bio, available, special, name, phone, email, address, sex in cur:
#         res.append({
#             'id': ID,
#             'name': name,
#             'phone': phone,
#             'email': email,
#             'address': address,
#             'sex': sex,
#             'qualification': qual,
#             'license': lic,
#             'bio': bio,
#             'available': available,
#             'specialization': special
#         })
#     return res
