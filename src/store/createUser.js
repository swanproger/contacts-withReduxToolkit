import {createSlice} from "@reduxjs/toolkit";
    
const createUserSlice = createSlice({
    name: "createUser",
    initialState:  {
        name: "",
        surname:"",
        phonenumber: "",
        users: [{
            name: "Артём",
            surname: "Михайлов",
            phonenumber: "89992822234",}]
    },
    reducers:{
        setdata(state, action){
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }
        },
        setusers(state, action){
            state.users.push({name:state.name, surname:state.surname,phonenumber: state.phonenumber})
        }
    }
})
export const {setdata,setusers} = createUserSlice.actions;
export default createUserSlice.reducer;