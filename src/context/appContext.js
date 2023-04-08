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
        setIsLogin(true);
    }

    const Logout = ()=>{
        cookies.remove('user-token');
        cookies.set('Auth',false);
        setIsLogin(false);
        setToken(null);
    }

    useEffect(() => {
        let accessToken = cookies.get("user-token");
        if (accessToken) {
            console.log("IsLogin",IsLogin)
            setToken(accessToken);
            setIsLogin(true);
        }
    }, []);

    useEffect(() => {
        if (token) setToken(token);
    }, [token]);

    useEffect(() => {
        if (IsLogin) setIsLogin(IsLogin);
    }, [IsLogin]);

    return (
        <AppContext.Provider value={{IsLogin,setIsLogin,Login,Logout}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
