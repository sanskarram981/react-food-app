import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";


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
       <li><Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link></li>
       <li><Link to="/about" style={{color:"black",textDecoration:"none"}}>About</Link></li>
       <li><Link to="/contact" style={{color:"black",textDecoration:"none"}}>Contact</Link></li>
       <li><Link to="/cart" style={{color:"black",textDecoration:"none"}}>Cart</Link></li>
       <li><button className="login" onClick={()=>{btnText === "Login"?setbtnText("LogOut"):setbtnText("Login")}}>{btnText}</button></li>
     </ul>
    </div>
    </div>
   );
};

export default Header;