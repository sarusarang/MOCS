import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from './FilterSlice'
import BuyNowSlice from './BuySlice'


export const Store = configureStore({



    reducer: {


        Filter:FilterReducer,
        BuyNow:BuyNowSlice

        
    }


}) 