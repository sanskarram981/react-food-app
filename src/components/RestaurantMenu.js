import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = (Id) => {
    const [resMenu,setResMenu] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{getData()},[]);

    const getData = async () => {
        const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9360036&lng=77.6808131&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const jsonData = await fetch(URL);
        const myData = await jsonData.json();
        setResMenu(myData);
    }

    if(resMenu === null)
    return <Shimmer/>

    const {name,city,cuisines,sla,avgRating,cloudinaryImageId,locality,areaName,costForTwo} = resMenu?.data?.cards[0]?.card?.card?.info;
    const {deliveryTime} = sla;
    const {title,itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div className="res-menu">
        <h1>{name}</h1>
        <h3>{`${locality}, ${areaName}, ${city}`}</h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>Rs {costForTwo/100} for two</h3>
        <h3>{deliveryTime} mins</h3>
        <h3>{avgRating} stars</h3>
        <hr></hr>
        <h2>{title}</h2>
        <ul>
            {
                itemCards.map((item)=><li key={item?.card?.info?.id}>
                    <div className="res-menuitem">
                    <h3>{item?.card?.info?.name}</h3>
                    <p>{item?.card?.info?.description}</p>
                    <p>Rs. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 } </p>
                    {item?.card?.info?.isVeg === 1 ? <p>Veg</p>:<p>Non-Veg</p>}
                    </div>
                </li>)

            }
        </ul>
        </div>
    );
}

export default RestaurantMenu;