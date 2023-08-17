import {createContext,useState} from "react";

export const UserContext =createContext(
    {
    currentUser:null,
    setCurretUser:()=>null
    })
export const UserProvider= ({children})=>
{
    const [currentUser,setCurretUser]=useState(null)
    const value={currentUser,setCurretUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}