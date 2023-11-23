import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => 
{
   const [btnText,setbtnText] = useState("Login");
   const onlineStatus = useOnlineStatus();
   const userData = useContext(UserContext);
   const {username,email} = userData;

   return(
    <div className="header m-1 flex justify-between items-center bg-gray-200 border-2 border-black">
    <div className="logo-container">
    <img className="logo w-28 h-28 m-2 rounded-full" src={LOGO_URL} title="appLogo.png"/>
    </div>
    <div className="nav-items">
     <ul className="flex pr-4 font-bold text-xl">
       <li className="p-2 m-2">Online Status : {onlineStatus?"🟢":"🔴"}</li>
       <li className="p-2 m-2"><Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link></li>
       <li className="p-2 m-2"><Link to="/about" style={{color:"black",textDecoration:"none"}}>About</Link></li>
       <li className="p-2 m-2"><Link to="/contact" style={{color:"black",textDecoration:"none"}}>Contact</Link></li>
       <li className="p-2 m-2"><Link to="/grocery" style={{color:"black",textDecoration:"none"}}>Grocery</Link></li>
       <li className="p-2 m-2"><Link to="/cart" style={{color:"black",textDecoration:"none"}}>Cart</Link></li>
       <li className="p-2 m-2"><button className="login bg-orange-400 px-2 pb-1 rounded-sm" onClick={()=>{btnText === "Login"?setbtnText("LogOut"):setbtnText("Login")}}>{btnText}</button></li>
       <li className="p-2 m-2">{username}</li>
       <li className="p-2 m-2">{email}</li>
     </ul>
    </div>
    </div>
   );
};

export default Header;