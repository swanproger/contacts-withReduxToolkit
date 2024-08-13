import phone from "../img/phone.png"
import user from "../img/user.png"
export const User = ({name,surname,phonenumber, setHasError}) => {
   
    return(<li>
        <img src={user} alt="user" className="icon-user"></img>
        <h2 className="contact-text">{name} {surname}</h2>
        <img src={phone} alt="phone" ></img>
        <h3 className="contact-text">{phonenumber}</h3>
    </li>)

}
