import { Navigate, Outlet } from "react-router-dom"
import "./Auth.css"

const Auth = ()=>{

    const user = JSON.parse(localStorage.getItem("user"))
    if(user?.name){
        return <Outlet/>
    }
    
    return <Navigate to={"/"}/>
}
        

export default Auth