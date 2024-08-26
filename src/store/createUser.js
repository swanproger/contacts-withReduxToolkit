import { createSlice } from "@reduxjs/toolkit";

const createUserSlice = createSlice({
  name: "createUser",
  initialState: {
    name: "Артём",
    surname: "Михайлов",
    phonenumber: "89998309478",
    users: [],
  },
  reducers: {
    setdata(state, action) {
      return {
        name: action.name,
        surname: action.surname,
        phonenumber: action.phonenumber,
      };
    },
    setusers(state, action) {
      state.users.push({
        name: state.name,
        surname: state.surname,
        phonenumber: state.phonenumber,
      });
    },
    removeuser(state, action) {
      state.users = state.users.filter((user) => user.id === action.payload.id);
    },
  },
});
export const { setdata, setusers, removeuser } = createUserSlice.actions;
export default createUserSlice.reducer;
