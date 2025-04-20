from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    experience: int

class UserLogin(BaseModel):
    email: EmailStr
    password: str
