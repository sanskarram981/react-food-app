import {useState,useEffect} from "react";

const useRestaurantMenu = (resId) =>
{
    const [resMenu,setResMenu] = useState(null);
    useEffect(()=>{getData()},[]);

    const getData = async () => {
        const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9360036&lng=77.6808131&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const jsonData = await fetch(URL);
        const myData = jsonData.status === 200 ? await jsonData.json() : [];
        setResMenu(myData);
    }

    return resMenu;
}

export default useRestaurantMenu;