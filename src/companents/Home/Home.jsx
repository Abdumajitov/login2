import { NavLink, useNavigate } from "react-router-dom"
import "./Home.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
    const navigate = useNavigate()

    const bactu = ()=>{
        localStorage.removeItem("user")
        navigate("/")
    }

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fatchData()
    },[])

    const fatchData = async () => {
        const {data, status} = await axios.get("http://localhost:3000/user")
        if(status === 200){
            setUsers(data)
        }
    }

    return<>
        <div className="cont">
            <NavLink to={"/home/Add"}>addNewPeople</NavLink>
            <button onClick={bactu}>back</button>

            <div className="about">
                <span>id</span>
                <span>First name</span>
                <span>Last name</span>
                <span>Email</span>
                <span>Salery</span>
                <span>gender</span>
            </div>
            {users.map((user)=>(
                <div className="user">
                <span>{user.id}</span>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                <span>{user.email}</span>
                <span>{user.salary}$</span>
                <span>{user.gender}</span>
                <NavLink to={`/home/show/${user.id}`}>show</NavLink>
                <NavLink to={`/home/edit/${user.id}`}>edit</NavLink>
                <button>Delete</button>
            </div>
            ))}
            
        </div>
    </>
}

export default Home