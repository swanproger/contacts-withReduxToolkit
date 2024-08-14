import { useState } from "react";
import { Users } from './components/Users';
import {useDispatch, useSelector} from "react-redux";
import {setdata, setusers} from "./store/createUser"

function App() {
  const store = useSelector((store) => store.createUser);
  const dispatch = useDispatch();
  const [searchUser, setSearchUser] = useState("")
 
const handleChange = (event) => {
  const { name, value } = event.target; 
  dispatch(setdata({name, value}));
 ;}

const onChangesearchUser = (event) => { 
  setSearchUser(event.target.value)
}
const handleSendUsers = (e) => {
  e.preventDefault()
  dispatch(setusers())
}
  return (
    <div className="App">
      <h1>Моя телефонная книга</h1>
      <div className="App__content">
        <div className="App__addUser">
          <input value={store.name} onChange={handleChange} className="add name" type="text" placeholder="Введите имя" name="name"></input>
          <input value={store.surname} onChange={handleChange} className="add surname" type="text" placeholder="Введите фамилию" name="surname"></input>
          <input value={store.phonenumber} onChange={handleChange} className="add phonenumber" type="tel" placeholder="Введите номер телефона" name="phonenumber"></input>
          <button type="submit" onClick={handleSendUsers} >Добавить контакт</button>
        </div>
        <div className="App__users">
        <Users searchUser={searchUser} onChangesearchUser={onChangesearchUser} ></Users>
        </div>

      </div>
    </div>
    
  );
}

export default App;
