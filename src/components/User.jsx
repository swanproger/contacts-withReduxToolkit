import phone from "../img/phone.png"
import user from "../img/user.png"
import {removeuser} from "../store/createUser"
import {useDispatch} from "react-redux";
export const User = ({name,surname,phonenumber,id}) => { 
    const dispatch = useDispatch();
    console.log(id)
    return(<li>
        <img src={user} alt="user" className="icon-user"></img>
        <h2 className="contact-text">{name} {surname}</h2>
        <img src={phone} alt="phone" ></img>
        <div onClick={() => {dispatch(removeuser({id}))}} style={{color:"red"}} className="delete">&times;</div> 
        <h3 className="contact-text">{phonenumber}</h3>
        
    </li>)

}
