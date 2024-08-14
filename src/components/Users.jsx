import { User } from "./User";
import {useSelector} from "react-redux";
export const Users = ({searchUser,onChangesearchUser }) => {
  const store = useSelector((store) => store.createUser.users);
  return (
    <>
    <div className="search-header">
    <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input value={searchUser} onChange={onChangesearchUser} type="text" placeholder="Найти контакт..." />
      </div>
    </div>
      <ul className="user-list">
        {store.lenght === 0
          ? ""
          : store.filter((obj) => {
            const fullName = (obj.name + obj.surname).toLowerCase()
            return (fullName.includes(searchUser.toLowerCase()) || obj.phonenumber.includes(searchUser.toLowerCase()))
           
             }).map((obj,index) => {
              return <User key={index} {...obj}></User>;
            })}
      </ul>
    </>
  );
};
