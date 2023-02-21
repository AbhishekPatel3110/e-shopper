import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'cart',
    initialState:{
        value : []
    },
    reducers:{
        addItem : (state,action)=>
        {
            const prod = action.payload;
            state.value = [...state.value,{product:prod,qty:1}]
        },
        removeItem : (state,action)=>
        {
            const pid = action.payload;
            state.value = state.value.filter(ob=>ob.product._id!=pid)
        },
        emptyCart : (state,action)=>{
            state.value = []
        },
        incrementQty : (state,action)=>{
            const pid = action.payload;
            state.value = state.value.map(ob=>ob.product._id==pid?{...ob,qty:ob.qty+1}:ob)
        },
        decrementQty : (state,action)=>{
            const pid = action.payload;
            state.value = state.value.map(ob=>ob.product._id==pid && ob.qty>1?{...ob,qty:ob.qty-1}:ob)
        },
    }
})
export const {addItem,removeItem,emptyCart,incrementQty,decrementQty}  = slice.actions
export default slice.reducer;