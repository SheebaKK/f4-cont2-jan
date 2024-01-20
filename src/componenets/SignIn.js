
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn=()=>{
    const [user,setUser]=useState({email:'',password:''});

    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")
    const navigate=useNavigate()


    async function implementSingup(e){
        e.preventDefault()

        if(!user.email || !user.password){
            setError("All fields are required")
            setSuccess("")
            return;
        }
        try{
            let response=await axios.post("https://dummyjson.com/auth/login",{username:user.email,password:user.password},)
            console.log(response.data)
            console.log(response.data.email)
            localStorage.setItem("user",JSON.stringify(response.data))
            setSuccess("Succesfully logged in")
            navigate("/login")

        }
        catch(e){
            setError(e.message)
        }
       
    }

    return(

    <div className="sign-in">
        
        <>Welcome back! 👋</>
        <h3>Sign in to your account</h3>
        <form action="" onSubmit=''>
            <label>Your Email</label><br />
            <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}/><br />
            <label>Password</label><br />
            <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button type="submit" onClick={implementSingup}>Continue</button><br /> 
            {/* <a href="#">Forget your password?</a> */}
            
                
                <p>Don't have an account? <a href="/"> SignUp</a></p>
                <h3>{error?<p style={{color:'red'}}>{error}</p>:<p style={{color:'green'}}>{success}</p>}</h3>
        </form>
       
    </div>
    
    )
}



export default SignIn