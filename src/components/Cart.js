import { useSelector,useDispatch } from "react-redux";
import ListCategory from "./ListCategory";
import { clearItem } from "../utils/cartSlice";

const Cart = () =>
{
    const dispatcher = useDispatch();
    const listItems = useSelector((store)=>store.cart.items)
    return(
        <div className="bg-gray-200 w-6/12 m-auto rounded-sm py-2 mt-2">
            <div className="text-center border-b-2 border-gray-500">
                <h3 className="font-bold text-xl">Cart</h3>
                <button className="bg-black rounded-lg text-white p-2 m-2" onClick={()=>{dispatcher(clearItem())}}>Clear Cart</button>
            </div>
            {listItems.length === 0 ?<h1 className="text-xl font-bold text-center my-8">Cart is Empty</h1>:<ListCategory listData={listItems} />}
        </div>
    );
}
export default Cart;