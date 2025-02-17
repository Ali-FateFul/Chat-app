import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from "../firebase";

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

    const [loading , setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            console.log(user)
            if(user) history.push("/chats");
        })
    },[user , history])

    return (
        <div>
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;