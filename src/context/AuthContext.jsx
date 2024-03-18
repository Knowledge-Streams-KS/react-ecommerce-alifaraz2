import { createContext, useState,} from "react";

const UserAuthContext=createContext();
const UserAuthProvider=({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email,setEmail]=useState()

return(
    <>
    <UserAuthContext.Provider value={{isLoggedIn,setIsLoggedIn,email,setEmail}}>
        {children}
    </UserAuthContext.Provider>
    
    </>
)
}

export  {UserAuthContext,UserAuthProvider};