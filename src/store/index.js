import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key : 'root',
    storage : storage
}
const persistedReducer =  persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
        }
    }) 
})

export const persistor = persistStore(store);