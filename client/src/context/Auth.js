import { useState, useContext,createContext } from "react";

const AuthContext= createContext();

const AuthProvider =({Children})=>{
    const[auth,setauth]=useState({
        user:null,
        token:""
    })
    return (
        <AuthContext.Provider value={[auth, setauth]}>
            {Children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext) 

export {useAuth, AuthProvider};