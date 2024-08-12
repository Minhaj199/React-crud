import { createSlice } from "@reduxjs/toolkit";

const initialState={
    errors:{}
}

const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        setError(state,action){
            state.errors[action.payload.field]=action.payload.error
        },
        clearError(state,action){
            delete state.errors[action.payload.field]
        },
        clearAllErrors(state){
            state.errors={}
        }
    }
})
export const {setError,clearError,clearAllErrors}=formSlice.actions
export default formSlice.reducer