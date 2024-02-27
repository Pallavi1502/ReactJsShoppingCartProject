import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] =useState(false);
  const [products, setProducts] =useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const res= await fetch(API_URL);
      const data= await res.json();
      setProducts(data);
    }
    catch(e){
      console.log("Error occured");
      setProducts([]);
    }

    setLoading(false);
  }

  useEffect(  ()=>{
    fetchProductData();
  } ,[])


  return (
    <div>
      {
        loading? <Spinner className='h-screen w-screen'  /> : 
        (products.length > 0) ?
        (<div  className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            products.map( (prod) =>(
              <Product key ={prod.id} card={prod} />
            ) )
          }
          </div>
          ) :
          (<div  className="flex justify-center items-center">
            <p> NO DATA FOUND</p>
          </div>
          )
      }
    </div>
  );
};

export default Home;
