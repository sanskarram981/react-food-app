import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";


const Header = () => 
{
   const [btnText,setbtnText] = useState("Login");
   return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" src={LOGO_URL} title="appLogo.png"/>
    </div>
    <div className="nav-items">
     <ul>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       <li>Cart</li>
       <li><button className="login" onClick={()=>{btnText === "Login"?setbtnText("LogOut"):setbtnText("Login")}}>{btnText}</button></li>
     </ul>
    </div>
    </div>
   );
};

export default Header;