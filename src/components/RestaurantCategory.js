import {useState} from "react";
import ListCategory from "../components/ListCategory";

const RestaurantCategory = (props) =>
{
    const [showItems,setshowItems] = useState(false);
    const {title,itemCards} = props.data;
    return(
        <div>
            <div className="flex justify-between bg-white p-2 shadow-lg mx-3 my-2 rounded-lg cursor-pointer" onClick={()=>setshowItems(!showItems)}>
                <span className="font-bold">{title}</span>
                <span className="font-bold">{"🔽"}</span>
            </div>
            {showItems && <ListCategory listData={itemCards}/>}
        </div>
    );
};

export default RestaurantCategory;