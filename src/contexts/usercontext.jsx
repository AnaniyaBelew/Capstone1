import {createContext,useState, useEffect} from "react";
import {onAuthStateChangedListener,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils"
export const UserContext =createContext(
    {
    currentUser:null,
    setCurretUser:()=>null
    })
export const UserProvider= ({children})=>
{
    useEffect(()=>
    {
        const unsubscribe= onAuthStateChangedListener((user)=>
        {
            if (user)
            {
                 createUserDocumentFromAuth(user);
            }
            setCurretUser(user)
        })
        return unsubscribe
    }
    ,[])
    const [currentUser,setCurretUser]=useState(null)
    const value={currentUser,setCurretUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}