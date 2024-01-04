import { useEffect, useState } from "react";

const usePasswordValidation=()=>{
    const[password,setPassword]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [isPasswordValid,setPasswordValid]=useState(false);
    const[displayMessage,setDisplayMessage]=useState(false)
    const passwordRegex = /^[a-zA-Z0-9@#_-]{8,}$/;

    useEffect(()=>{
        if(!password){
            setPasswordError('Password is Required');
            setPasswordValid(false);
            setDisplayMessage(true);
        }
        else if (!passwordRegex.test(password)){
            setPasswordError('Enter a valid Password minimum length is 8 ');
            setPasswordValid(false);
            setDisplayMessage(true)
        }
        else{
            setPasswordError('');
            setPasswordValid(true)
        }
    })
    
    return{
        password,passwordError,isPasswordValid,displayMessage,setPassword
    }
}

export default usePasswordValidation;