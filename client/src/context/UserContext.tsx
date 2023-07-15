import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

interface childrenProps { 
    children: React.ReactNode,
}

export const UserContextProvider = ({children} : childrenProps) => {
    const [userName, setUserName] = useState('');
    const [id, setId] = useState();

    useEffect(() => {
        axios.post('/api/user').then(res => {
            console.log("sending", res)
        })
    }, [])

    return (
        <UserContext.Provider value={{ userName, setUserName, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}