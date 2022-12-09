import { useState, useEffect } from "react";
import Notifications from "examples/Notifications";
// api
import { userLogout } from "api/user";

export default function App() {
    const [successSB, setSuccessSB] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        userLogout().then((response)=>{
            console.log("response",response)
            if(response.status == 200){
            setSuccessSB(true);
            setMessage({color:"success",message:response.data.message});
            localStorage.removeItem('Authorization')
            setTimeout(function() {
                window.location.replace('/');
            }, 1000);
            }
        }).catch((err)=>{
            console.log("err",err)
            alert(err.response.data.message)
        })
    }, []);
    return successSB == true ? (<Notifications open color={message.color} icon="check" message={message.message}/>) : "";
}
