import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);
    
    if(resMenu === null)
    return <Shimmer/>

    const {name,city,cuisines,sla,avgRating,cloudinaryImageId,locality,areaName,costForTwo} = resMenu?.data?.cards[0]?.card?.card?.info;
    const {deliveryTime} = sla;
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategories = categories.filter((category)=> category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return(
        <div className="bg-gray-200 w-9/12 m-auto rounded-sm py-2 mt-2">
          <div className="text-center border-b-2 border-gray-500">
            <h3 className="font-bold text-xl">{name}</h3>
            <h4 className="font-bold">{locality},{areaName},{city}</h4>
            <h4 className="font-bold">{cuisines.join(",")}</h4>
            <h4><span className="font-bold">{avgRating}</span> stars rating, <span className="font-bold">₹ {costForTwo/100}</span> for two, delivers in <span className="font-bold">{deliveryTime}</span> mins.</h4>
          </div>
          <div>
            {
                itemCategories.map((category)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)
            }
          </div>
        </div>
    );
}

export default RestaurantMenu;