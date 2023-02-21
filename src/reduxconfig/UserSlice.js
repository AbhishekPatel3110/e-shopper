import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'user',
    initialState : {
        value : { name : undefined , 
                  token : undefined , 
                  islogin:false }
    },
    reducers:{
        changeData: (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changeData} = slice.actions
export default slice.reducer;