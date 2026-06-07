import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios"

function Register() {
  const navigate = useNavigate();
  const [data,setdata] =useState({username:"",password:"",email:""})
  const handlechange =(e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost:3000/auth/register",data);
        console.log(res);
        navigate("/login");
    }
    catch(error){
       console.log(error.message)
    }
    
  }
  return (
    <div className="auth-container" >
      <div className="auth-card">
        <h1>Create Account</h1>

        <form className="auth-form" onSubmit={handlesubmit}>
          <input
            name="username"
            value={data.username}
            onChange={handlechange}
            type="text"
            placeholder="Username"
          />

          <input
             name="email"
             value={data.email}
            onChange={handlechange}
            type="email"
            placeholder="Email"
          />

          <input
            name="password"
            value={data.password}
            onChange={handlechange}
            type="password"
            placeholder="Password"
          />

          <button type="submit" >
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;