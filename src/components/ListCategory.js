import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";

const ListCategory = (props) => {

    const itemCards = props.listData;
    const dispatcher = useDispatch();
    return(
        <div>
          {
            itemCards.map((item)=><div key={item?.card?.info?.id} className="mx-3 my-2 pb-2 border-b-2 border-gray-500 flex justify-between">
                <div className="w-9/12">
                <h3 className="font-bold text-xl">{item?.card?.info?.name}</h3>
                <h3 className="font-bold">₹ {item?.card?.info?.price === undefined ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</h3>
                <p className="text-sm break-words">{item?.card?.info?.description}</p>
                </div>
                <div>
                <label className="absolute bg-white text-black rounded-lg ml-6 mt-16 px-1 cursor-pointer" onClick={()=>{
                    dispatcher(addItem(item));
                }}>Add +</label> 
                    <img className="w-24 h-24"src={CDN_URL+item?.card?.info?.imageId}/>              
                </div>
            </div>)
          }
        </div>
    );
}

export default ListCategory;