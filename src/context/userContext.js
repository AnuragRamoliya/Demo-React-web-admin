import React, { createContext,useEffect,useState,useContext} from "react";
import { getUserProfile } from "../api/user";
import { AppContext } from "context/appContext"
export const UserContext = createContext();

const UserDataProvider = (props) => {
    const { IsLogin } = useContext(AppContext);
    const [getUserData, setGetUserData] = useState([]);
    console.log("IsLogin",IsLogin)
    useEffect(() => {
        if(IsLogin === true){
            getUserProfile().then((response)=>{
                setGetUserData(response.data.data)
            })
        }
    }, []);
    return (
        <UserContext.Provider value={{getUserData,setGetUserData}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserDataProvider;
