import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({card}) => {

  const {cart} = useSelector(  (state) => state);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(card));
    toast.success("ITem added to cart")
  }
  const removeFromCart = () =>{
    dispatch(remove(card.id));
    toast.error("ITem removed from cart")
  }
  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 border shadow rounded-lg hover:shadow-2xl">
    <div>
      <p  className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"> {card.title} </p>
    </div>
    <div>
      <p  className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {card.description.split(" ").slice(0,10).join(" ") + "..."}
      </p>
    </div>
    <div  className="h-[180px]">
      <img src={card.image} alt="LOGO"  className="h-full w-full "  />
    </div>
    <div  className="flex justify-between gap-12 items-center w-full mt-5">
      <div> 
      <p className="text-green-600 font-semibold">${card.price}</p>
      </div>
      
  
      {
         cart.some( (p) => p.id === card.id ) ?
        (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
           onClick={removeFromCart}>
             Remove Item
          </button>):
        (
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
      }
    </div>
  </div>
    
  ); 
};

export default Product;
