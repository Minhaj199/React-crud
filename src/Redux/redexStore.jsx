import { configureStore } from "@reduxjs/toolkit";
import  formSlice  from './user/formSlice'

const store=configureStore({
    reducer:{
        form:formSlice
    }
})

export default store