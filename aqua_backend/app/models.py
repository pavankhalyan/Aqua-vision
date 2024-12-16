from pydantic import BaseModel,EmailStr 

class user(BaseModel): 
    name: str 
    email : EmailStr
    experience: int
    password : str 

class login(BaseModel): 
    email : EmailStr
    password : str  



    