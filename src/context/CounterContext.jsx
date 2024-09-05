import { createContext,useState} from "react";


export let Counter = createContext(0);

export default function  CountrContextProvider({children})
{
    let [count,setCount]=useState(0);

    function increase()
    {
        setCount(count+1)
    }
    
    return <Counter.Provider value={{count,increase}}>

        {children}

    </Counter.Provider>
}