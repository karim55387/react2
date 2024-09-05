import { createContext,useState} from "react";


export let UserContext = createContext(0);

export function  UserContextProvider(props)
{
    const [UserLogin,setuserLogin]=useState(null);
    
    return <UserContextProvider value={{UserLogin,setuserLogin}}>
        {props.childern }
    </UserContextProvider>
}