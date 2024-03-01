import React, { useState } from 'react'
import "../styles/styles.css";


import { account } from '../components/Appwrite';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const SignupAction = async () => {
    // APPWRITE CONFIGURATION
    const signUpProcess = account.create(
      userData.name,
      userData.email,
      userData.password,
    )
    signUpProcess.then(function (res) {
      alert("SignUp successfully");
      navigate("/login");
    }, function (error) {
      alert(error);
    })
  }


  return (
    <div id="form-main">
      <div id="input-form">
        <h2 id="input-h2">Signup</h2>
        <input type="text" id="input" placeholder='Enter Name' onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <input type="email" id="input" placeholder='Enter Email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <input type="text" id="input" placeholder='Enter Password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <button onClick={SignupAction} id="beta-btn">Signup</button>
      </div>
    </div>
  )
}
export default Signup