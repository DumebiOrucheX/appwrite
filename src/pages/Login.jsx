import React, { useState } from 'react'
import "../styles/styles.css";
import { account } from '../components/Appwrite';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password:""
  });



  // APPWRITE CONFIGURATION
  const LoginAction = async () => {
    try{
      await account.createEmailSession(userData.email, userData.password);
      alert("Login successfully");
      navigate("/");
    }
    catch(error){
        console.log(error);
    }
  }



  return (
    <>
      <div id="form-main">
        <div id="input-form">
            <h2 id="input-h2">Login</h2>
            <input type="email" id="input" placeholder='Email' onChange={(e) => setUserData({...userData, email: e.target.value})}/>
            <input type="text" id="input" placeholder='Password' onChange={(e) => setUserData({...userData, password: e.target.value})}/>
            <button onClick={LoginAction} id="beta-btn">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login