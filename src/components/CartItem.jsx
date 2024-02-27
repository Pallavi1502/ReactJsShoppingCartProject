import {RiDeleteBin2Fill} from "react-icons/ri"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
import toast from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart = ()=> {
    dispatch(remove(item.id));
    toast.error("Item removed ");
  }

  return (
   <>
   <div className="w-[8/12] flex  gap-14 mb-10 py-5 border-b-2 ">

    <div  className=" h-[180px] w-[180px] basis-1/3 ">
      <img src={item.image}  className="h-full  object-cover " /> 
    </div>
    <div className="flex flex-col justify-around basis-2/3 ">
      <h1 className="text-gray-700 font-semibold text-lg text-left  mt-1">
        {item.title}  
        </h1>
      <h1 className="w-10/12 text-gray-900 font-normal text-[10px] text-left">
        {item.description.split(" ").slice(0,10).join(" ") + "..."}
        </h1>
      <div className="flex justify-between mr-12 items-center ">
        <p  className="text-green-600 font-semibold">${item.price}</p>
        <div className=" h-[27px] w-[27px] rounded-full bg-red-400 hover:cursor-pointer ">
          <div 
          className=" mt-1 ml-1.5 "
          onClick={removeFromCart}> <RiDeleteBin2Fill />
          </div>
        </div>
        
      </div>
    </div>


   </div>
   </>
  );
};

export default CartItem;
