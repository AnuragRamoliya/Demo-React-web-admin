import { useState, useEffect,useContext } from "react";
import Notifications from "examples/Notifications";
import { useNavigate } from "react-router-dom";
// api
import { userLogout } from "api/user";
import Cookies from "universal-cookie";
import { AppContext } from "context/appContext"
export default function App() {
    const navigate = useNavigate();
    const [successSB, setSuccessSB] = useState(false);
    const [message, setMessage] = useState("");
    const cookies = new Cookies();
    const { setIsLogin,Logout } = useContext(AppContext);
    useEffect(() => {
        userLogout().then((response)=>{
            console.log("response",response)
            if(response.status === 200){
                setSuccessSB(true);
                setMessage({color:"success",message:response.data.message});
                Logout();
                setTimeout(function() {
                    navigate("/authentication/sign-in");
                }, 1000);
            }
        }).catch((err)=>{
            console.log("err",err)
            alert(err.response.data.message)
        })
    }, []);
    return successSB === true ? (<Notifications open color={message.color} icon="check" message={message.message}/>) : "";
}
