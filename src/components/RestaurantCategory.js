import {useState} from "react";
import ListCategory from "../components/ListCategory";

const RestaurantCategory = (props) =>
{
    // const [showItems,setshowItems] = useState(false);
    const {showItems,setShowIndex,resetShowIndex} = props;
    const {title,itemCards} = props.data;
    return(
        <div>
            <div className="flex justify-between bg-gray-300 p-2 shadow-white shadow-sm mx-3 my-2 rounded-lg cursor-pointer" onClick={()=>showItems?resetShowIndex():setShowIndex()}>
                <span className="font-bold">{title}</span>
                <span className="font-bold">{"🔽"}</span>
            </div>
            {showItems && <ListCategory listData={itemCards}/>}
        </div>
    );
};

export default RestaurantCategory;