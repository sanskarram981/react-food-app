import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) =>
{
    const {resData} = props;
    return(
   <div className="res-card w-[220px] h-[400px] bg-gray-100 p-2 m-2 rounded-lg hover:bg-gray-300 hover:border-2 border-indigo-400">
    <img className="res-logo h-[200px] w-[220px] rounded-lg" src={CDN_URL+resData?.info?.cloudinaryImageId}/>
    <h3 className="font-bold text-center">{resData?.info?.name}</h3>
    <h4 className="text-center break-words p-1">{resData?.info?.cuisines.slice(0,5).join(",")}</h4>
    <h4 className="text-center break-words p-1">{resData?.info?.avgRating} stars</h4>
    <h4 className="text-center break-words p-1">{resData?.info?.sla?.deliveryTime} mins</h4>
    <h4 className="font-bold text-center break-words p-1">{resData?.info?.costForTwo}</h4>
   </div>);
};

export default RestaurantCard;