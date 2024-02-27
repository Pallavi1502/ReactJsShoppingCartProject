import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=> acc + curr.price,0 ));
  },[cart])

  return (
    <div className="w-6/12 mx-auto h-screen">
       {
        cart.length > 0 ?(
          <div className="w-10/12 flex gap-14 basis-1/2">
            <div >
              {
                cart.map( (item,index) =>(
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ) )
              }
            </div>

            <div className="h-screen ">
            <div className="h-4/5 flex flex-col basis-1/2 justify-between fixed">
              <div >
              <div className=" font-sans font-semibold text-green-600"> YOUR CART</div>
              <div className=" font-semibold text-2xl text-green-600 mb-4">SUMMARY</div>
              <p className="font-semibold text-black">
                <span>Total Items: {cart.length}</span> 
              </p>
              </div>

              <div > 
              <p className="font-semibold ">Total Amount: ${totalAmount.toFixed(2)} </p>
              <button className="bg-green-600 p-2 w-full mt-3 px-16 rounded-md">
                Checkout Now
              </button>
             </div>
            </div>  
            </div>

            
          </div>
        ) :
        (
          <div className="h-full flex flex-col justify-center items-center ">
            <div className="">
              <h1>Cart Empty</h1>
            </div>
            <div>  
            <Link to={"/"}>
              <button className="bg-green-600 p-2 px-5 mt-3 rounded-md hover:text-white">
                Shop Now
              </button>
            </Link> 
            </div>
          </div>  
        )
       }
    </div>
  );
};

export default Cart;
