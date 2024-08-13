import {configureStore} from "@reduxjs/toolkit"
import createUserReducer from "./createUser"

const store = configureStore({
    reducer: {
        createUser: createUserReducer
    }
})
export default store;