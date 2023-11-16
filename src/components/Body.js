import { useState } from "react";
import resList, { simp } from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => 
{
  const[restList,setRestList] = useState(resList);
  return(
    <div className="body">
    <div className="search-filter">
     <label>Search</label>
     <input placeholder="search"></input>
     <div className="filter">
      <button className="filter-button" onClick={() => {
        setRestList(resList.filter((res) => res.info.avgRating >= 4));
      }}>Top Category Restaurant</button>
     </div>
     <div>
        <label>Rating</label>
        <select>
         <option>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
         <option>&#9733;&#9733;&#9733;&#9733;</option>
         <option>&#9733;&#9733;&#9733;</option>
         <option>&#9733;&#9733;</option>
         <option>&#9733;</option>
        </select>
        
     </div>
     <div className="showing">
        Showing {restList.length} of {resList.length}
     </div>
    </div>
    <div className="res-container">
     {
        restList.map((res) => <RestaurantCard key={res.info.id} resData={res}/>)
     }   

    </div>
    </div>
   );
};

export default Body;