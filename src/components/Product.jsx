import React, { useContext } from "react";
import {Plus, Eye} from "lucide-react";


//importing link
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

//importing icons

const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext);
  //destructuring product
  const { id, title,category, price, image } = product;

  return (
    <section className=" p-5 ">
      
      <div className="  shadow-md w-[400px] h-[300px] lg:h-[250px] mb-4 relative overflow-hidden group transition mx-auto ">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[180px] group-hover:scale-125 transition duration-300 " src={image} alt="" />
          </div>
        </div >
        <div className="flex flex-col absolute top-4 -right-11 group-hover:right-4 gap-y-2 p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 ">
          <button onClick={()=>addToCart(product, id)} >
            <div className="w-12 h-12 bg-green-600 hover:active:bg-lime-500 flex justify-center items-center text-white shadow-md cursor-pointer ">
              <Plus size={16}/>
            </div>
          </button>
          
            <Link 
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center items-center shadow-md cursor-pointer">
              <Eye size={16}/>
            </Link>
          
        </div>
      </div>

      <div className=" mx-auto px-0 lg:px-0 flex flex-col justify-start items-start">
        <div className="text-sm text-gray-500 ">{category}</div>
        <Link
        to={`/product/${id}`}
        ><h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold text-green-600">Rs. {price}</div>
      </div>
    </section>
  );
};

export default Product;
