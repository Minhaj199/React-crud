import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { validationLogin,validationSignup } from "../../../validation";
import { clearAllErrors } from "../../../Redux/user/formSlice";
import "./Login.css";

export const Login = () => {
  const [switching, setSwitching] = useState(false);
  const [inputs ,setInputs]=useState({})
  const errorOc=useSelector((store)=>store.form.errors)
  const dispatch=useDispatch()
  
  useEffect(() => {
    if(Object.keys(errorOc).length>0 ){
      Object.keys(errorOc).forEach(key=>{
        alert(errorOc[key])
       })
    }
  }, [errorOc]);
  function handleForm(e){

  
  


    e.preventDefault()
    dispatch(clearAllErrors())
   
    if(switching){
      if(validationSignup(inputs,dispatch)){
        alert('signu up')
      }
     
     
    }else{
      if(validationLogin(inputs,dispatch)){
        alert('user logged')
      }
      
    }
  }



  function handleChange(e){
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className={switching?"signup":'login'}>
      <div className="login-form">
        <h1>{switching?'User Signup':'User Login'}</h1>
        {switching?<div className="profile-img-login">
          <img src="/blank-profile-picture-973460_960_720.webp" alt="" />
          <input onChange={handleChange} id="input id" type="file" />
        </div>:<></>}
        
        <form onSubmit={handleForm}>
          {switching ? (
            <input type="name" onChange={handleChange} value={inputs.userName||''}  placeholder="User Name" name="userName" />
          ) : (
            <></>
          )}
          <input type="email" onChange={handleChange} value={inputs.email||''} placeholder="Email" name="email" />
          {switching ? (
            <input type="tel" onChange={handleChange} value={inputs.phone||''} placeholder="Mobile" name="phone" />
          ) : (
            <></>
          )}{" "}
          <input type="password"onChange={handleChange}   value={inputs.password||''} placeholder="Password" name="password" />
          {switching ? (
            <input
            onChange={handleChange}
            value={inputs.c_password||''}
              type="password"
              placeholder="Confirm password"
              name="c_password"
            />
          ) : (
            <></>
          )}
          <button type="submit">{switching ? "Sign up" : "Sign in"}</button>
        </form>

        <p className={switching?'signup-stage ':'login-stae'} onClick={() => setSwitching((previous) => !previous)}>
        {switching?'Already have an account ':'Not Having Account '}
        </p>
      </div>
    </div>
  );
};
