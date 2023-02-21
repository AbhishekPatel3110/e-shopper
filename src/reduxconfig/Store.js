import { configureStore } from "@reduxjs/toolkit";

import masterReducer from './MasterSlice'
import cartReducer from './CartSlice'
import userReducer from './UserSlice'
const store  = configureStore({
    reducer : {
        masterdata : masterReducer,
        carts : cartReducer,
        user : userReducer
    }
})

export default store;