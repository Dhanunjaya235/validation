import React, { FC, useEffect } from 'react';
import './login-form.css';
import { useState } from "react";
import usePasswordValidation from '../../validation_hooks/field-validation';
const useEmailValidation=()=>{
    const[email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    
    useEffect(()=>{
      if(!email){
        setEmailError('Email is Required');
        setIsEmailValid(false);
        
    }
    else if (!/\S+@\S+\.\S+/.test(email)){
        setEmailError('Enter a valid Email');
        setIsEmailValid(false);
        
    }
    else{
        setEmailError('');
        setIsEmailValid(true)
    }
    })

    return{
       setEmail,emailError,isEmailValid
    }
}

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const {setEmail,emailError,isEmailValid}=useEmailValidation();
  const {password,passwordError,isPasswordValid,displayMessage,setPassword}=usePasswordValidation();
  return(
    <div className='login'>
      <h1>Login</h1>
        <form>
         <p>
         <label> <input type="text" placeholder='Enter your Email' className='input' onChange={(e) => setEmail(e.target.value)}></input>
          </label>
         </p>
         <p>{!isEmailValid? <span>{emailError}</span>:null}</p>
         <p>
         <label>
             <input type="password" placeholder='Enter Password' className='input' onChange={(e)=>setPassword(e.target.value)}></input>
          </label>
         </p>
         <p>{!isPasswordValid  ?<span>{passwordError}</span>:null}</p>
         <button className='logbtn'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm;
