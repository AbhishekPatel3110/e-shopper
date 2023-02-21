import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'master',
    initialState : {
        value : {
            categories:[] , brands:[] , products:[]
        }
    },reducers:{
        loadCategory : (state,action)=>{
          state.value = {...state.value,categories:action.payload}
        },
        loadBrand : (state,action)=>{
            state.value = {...state.value,brands:action.payload}
        },
        loadProduct : (state,action)=>{
            state.value = {...state.value,products:action.payload}
        }
    }
})

export const {loadCategory,loadBrand,loadProduct} = slice.actions;
export default slice.reducer;