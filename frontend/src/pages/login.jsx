import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios"
function Login() {
  const navigate = useNavigate();
  const [data,setdata] = useState({
    email:"",
    password:""
  })
  const handlechange = (e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value 
    })
  }
 const handlesubmit = async (e)=>{
   e.preventDefault();
   try{
    const res = await axios.post("http://localhost:3000/auth/login",data,
  {
    withCredentials: true,
  });
    console.log(res);
    navigate("/dashboard");
   }
   catch(error){
    console.log(error.message);
   }
 }
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handlesubmit}>
          <input
             name="email"
             value ={data.email}
             type="email"
             onChange={handlechange}
            placeholder="Email"
          />

          <input
            name="password"
            value={data.password}
            type="password"
            onChange={handlechange}
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;