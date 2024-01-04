import React, { FC} from 'react';
import './register-form.css';
import {useForm} from 'react-hook-form';
import {Form} from 'semantic-ui-react';


interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({mode:"onSubmit"});
  const onSubmission=(data)=>{
      console.log(register);
      console.log(data);
  }
  return(
    <div className="register" data-testid="RegisterForm">
      <div className='title'>Regsiter Here</div>
      <div className='form'>
      <form onSubmit={handleSubmit(onSubmission)}>
          <Form.Field>
            <div className='inputfield'> <input type="text" placeholder='Enter First Name' {...register("firstname",{required:true,maxLength:20})}></input>
            <i className="fas fa-user"></i></div>
          </Form.Field>
          {errors.firstname && <span>First Name is Invalid</span>}
          <Form.Field>
            <div className='inputfield'><input type="text" placeholder='Enter Last Name' {...register("lastname",{required:true,maxLength:20})}></input>
            <i className="fas fa-user"></i> </div>
          </Form.Field>
          {errors.lastname && <span>Last Name is invalid</span>}
          <Form.Field>
            <div className='inputfield'>  <input type="text" placeholder='Enter Email' {...register("email",{required:true})}></input>
            <i className="far fa-envelope"></i></div>
          </Form.Field>
          {errors.email && <span>Email is invalid</span>}
          <Form.Field>
            <div className='inputfield'> <input type="password" placeholder='Enter Password' {...register("password",{required:true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}></input>
            <i className="fas fa-lock"></i></div>
          </Form.Field>
          {errors.password && <span>Password is invalid</span>}
          <button type='submit' >Submit</button>
      </form>
    
      </div>
  </div>
  )
};

export default RegisterForm;
