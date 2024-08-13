import {createSlice} from "@reduxjs/toolkit";
    

const createUserSlice = createSlice({
    name: "createUser",
    initialState:  {
        name: "",
        surname:"",
        phonenumber: "",
    },
    reducers:{
        setdata(state, action){
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }
        },
    }
})
export const {setdata} = createUserSlice.actions;
export default createUserSlice.reducer;