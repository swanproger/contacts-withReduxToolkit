import {configureStore, combineReducers} from "@reduxjs/toolkit"
import createUserReducer from "./createUser"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer =  combineReducers({
    createUser: createUserReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer) 

const store = configureStore({
    reducer: {
        reducer: persistedReducer,
    }
})

export const persister = persistStore(store)

export default store;