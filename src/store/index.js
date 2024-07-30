import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";

export const store = configureStore({
    reducer: {
        reducer:{
            user: useReducer
        }
    }
})