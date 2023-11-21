import { useEffect, useState } from "react";
import resList, { simp } from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => 
{
   const[restList,setRestList] = useState([]);
   const[filteredRestList,setFilteredRestList] = useState([]);
   const[searchText,setSearchText] = useState("");
   const onlineStatus = useOnlineStatus();
   

  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9360036&lng=77.6808131&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    if(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants === undefined)
    {
    setRestList([]);
    setFilteredRestList([]);
    }
    else
    {
    setRestList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  }

   useEffect(()=>{
      getData();
      return ()=>{}
   },[]);
   
   if(!onlineStatus)
   return <h1>You are offline 📶</h1>

   return restList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
      <div className="search">
     <input className="search-box" type="text" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
     <button onClick={()=>{
         setFilteredRestList(restList.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
     }}>Search</button>
     </div>
     <div className="top-rating">
      <button className="filter-button" onClick={() => {
        setFilteredRestList(restList.filter((res) => res.info.avgRating >= 4));
      }}>Top Category Restaurant</button>
     </div>
     <div className="rating-filter">
        <button>Rating</button>
        <select defaultValue={2.5} onChange={(e)=>{
          setFilteredRestList(restList.filter((res) => res.info.avgRating > e.target.value));
        }}>
         <option value={4.5}>rating 4.5+</option>
         <option value={4.0}>rating 4.0+</option>
         <option value={3.5}>rating 3.5+</option>
         <option value={3.0}>rating 3.0+</option>
         <option value={2.5}>rating 2.5+</option>
        </select>
     </div>
     <div className="showing">
        Showing {filteredRestList.length} of {restList.length}
     </div>
    </div>
    <div className="res-container">
     {
        filteredRestList.map((res) => <Link className="res-link" key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}><RestaurantCard resData={res}/></Link>)
     }   
    </div>
    </div>
   );
};

export default Body;