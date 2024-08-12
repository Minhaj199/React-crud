import { setError,clearError } from "./Redux/user/formSlice";


import React from 'react'

export const validationSignup = (inputs,dispatch) => {
  let isValid=true
  if(!inputs.userName.trim()){
    isValid=false
    dispatch(setError({field:'userName',error:'user name is required'}))
  }else{
    dispatch(clearError({field:'userName'}))
  }
  if(!inputs.email.trim()){
    isValid=false
    dispatch(setError({field:'email',error:'email is required'}))
  }else{
    dispatch(clearError({field:'email'}))
  }
  if(!inputs.phone){
    isValid=false
    dispatch(setError({field:'phone',error:'phone is required'}))
  }else{
    dispatch(clearError({field:'phone'}))
  }
  if(!inputs.password){
    isValid=false
    dispatch(setError({field:'password',error:'password is required'}))
  }else{
    dispatch(clearError({field:'password'}))
  }
  if(!inputs.c_password){
    isValid=false
   dispatch(setError({field:'c_password',error:'confirm password is required'}))
  }else{
    dispatch(clearError({field:'c_password'}))
  }
  if(inputs.password.length<5){
    isValid=false
    dispatch(setError({field:'password',error:'password should be more than 5'}))
  }else{
    dispatch(clearError({field:'password'}))
  }
  if(inputs.password!==inputs.c_password){
    isValid=false
    dispatch(setError({field:'password and confrom password',error:'password is not match'}))

  }
  return isValid
}
export const validationLogin = (inputs,dispatch) => {
    let isValid=true
    if(!inputs.email){
        isValid=false
      dispatch(setError({field:'email',error:'email is required'}))
    }else{
      dispatch(clearError({field:'email'}))
    }

    if( !inputs.password){
        isValid=false
        dispatch(setError({field:'password',error:'password is required'}))
    }else{
        dispatch(clearError({field:'password'}))
    }
    return isValid
  }
