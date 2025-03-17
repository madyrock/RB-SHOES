import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { ArrowRight, Trash2 } from "lucide-react";
import { CartContext } from "../contexts/CartContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="w-full flex justify-between items-center py-6 border-b border-gray-200 ">
        <div className="uppercase font-semibold text-sm">shopping bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="flex justify-self-center items-center w-8 h-8 cursor-pointer"
        >
          <ArrowRight />
        </div>
      </div>
      <div className="flex flex-col h-[60vh] overflow-y-auto">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className='flex w-[90vw] lg:w-full items-center justify-between  '>
          <span className="font-bold text-lime-600">Total: ${parseFloat(total).toFixed(2)}</span>
          <Trash2 onClick={()=>clearCart()} className="border w-[38px] h-[38px] p-2 rounded-2xl mt-5 text-red-700" size={30}/>
        </div>
        <div className="flex flex-col items-center justify-center">
        <Link className="w-[80%] rounded-2xl bg-gray-700 text-center py-2 text-white">Check Out</Link>
        <Link className="w-[80%] rounded-2xl bg-gray-700 text-center py-2 my-2 text-white">View Cart</Link>
        
        </div>
        
    </div>
  );
};

export default SideBar;
