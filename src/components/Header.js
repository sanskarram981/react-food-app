import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => 
{
   const [btnText,setbtnText] = useState("Login");
   const onlineStatus = useOnlineStatus();
   console.log("header-render");
   return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" src={LOGO_URL} title="appLogo.png"/>
    </div>
    <div className="nav-items">
     <ul>
       <li>Online Status : {onlineStatus?"🟢":"🔴"}</li>
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