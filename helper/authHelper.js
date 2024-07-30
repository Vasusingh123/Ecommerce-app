import bcrypt from 'bcrypt';

export const hashpassword = async(password)   => {
    try{
    const round=10;
    const hashedpassword= bcrypt.hash(password,round);
    return hashedpassword;
    }
    catch(error)
    {
        console.log(error);
    }

}

export const comparepassword=async(password,hashedpassword)=>{
    return bcrypt.compare(password, hashedpassword);
}