from passlib.context import CryptContext 
from jose import JWTError, jwt 
from datetime import datetime, timedelta 

SECRET_KEY = "" 
ALGORITHM = "HS256" 
ACCESS_TOKEN_EXPIRE_MINUTES =  

password_context = CryptContext(schemes=["bcrypt"], deprecated= "auto") 


def hash_password(password:str) -> str : 
    return password_context.hash(password) 

def verify_password(plain_password: str , hashed_password: str) -> bool : 
    return password_context.verify(plain_password,hash_password) 

def create_access_token(data:dict): 
    to_encode = data.copy()
    expire = datetime.utcnow + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES) 
    to_encode.update({"exp":expire}) 
    return jwt.encode(to_encode,SECRET_KEY,algorithm=ALGORITHM)
