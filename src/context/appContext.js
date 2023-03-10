import React, { createContext,useEffect,useState } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [IsLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState("");
    const Login = (token)=>{
        localStorage.setItem('Authorization',token)
        localStorage.setItem('Auth',true)
        setToken(token)
        setIsLogin(true);
    }
    return (
        <AppContext.Provider value={{IsLogin,token,setIsLogin,setToken,Login}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
