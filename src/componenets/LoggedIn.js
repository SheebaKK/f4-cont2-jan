import React,{useEffect, useState} from "react";

const LoggedIn=()=>{
    const[user,setUser]=useState([]);
    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem("user"))
        setUser(JSON.parse(localStorage.getItem("user")))
        console.log(user)
        
        

    },[])
   
    return(
        <div className="loggedin">

            <h1>Logged In</h1>
            <h4>Id:{user.id}</h4>
            <h4>FirstName:{user.firstName}</h4>
            <h4>LastName:{user.lastName}</h4>
            <h4>Gender:{user.gender}</h4>

        </div>
    )
}
export default LoggedIn;