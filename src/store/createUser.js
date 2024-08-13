import {createSlice} from "@reduxjs/toolkit";

const getInitialState = () => [
    {
        name: "",
        surname:"",
        phonenumber: "",
    }
]
    

const createUserSlice = createSlice({
    name: "createUser",
    initialState: getInitialState(),
    reducers:{
        setdata(state, action){
            console.log(action)
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }
        }
    }
})
export const {setdata} = createUserSlice.actions;
export default createUserSlice.reducer;