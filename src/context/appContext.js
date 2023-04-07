import React, { createContext,useEffect,useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [IsLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);
    const Login = (token)=>{
        cookies.set('user-token',token);
        cookies.set('Auth',true);
    }

    useEffect(() => {
        let accessToken = cookies.get("user-token");
        if (accessToken) {
            setToken(accessToken);
            setIsLogin(true);
        }
    }, []);

    useEffect(() => {
        if (token) setToken(token);
    }, [token]);

    return (
        <AppContext.Provider value={{IsLogin,setIsLogin,Login}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
