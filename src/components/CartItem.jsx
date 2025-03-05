import React from 'react';
import { Plus, Minus, X, } from 'lucide-react';
//importing the Link component from react-router-dom
import { Link } from 'react-router-dom';
// remove from cart
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
//CartItem component
const CartItem = ({ item }) => {

  //destructuring the item object
  const { id, title, price, image, amount } = item;
  //use the CartContext
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    
  <div className='flex items-center mx-5 py-4 border-b border-gray-200 gap-x-4 relative'>
    <div className=' min-h-[120px] flex items-center'>
      <Link to={`/product/${id}`}>
      <img className='max-w-[60px]' src={image} alt="" />
      </Link>
      
    </div>
    <div className='w-[300px] mx-4 '>
        <Link 
        className='text-sm uppercase font-semibold text-gray-800 max-w-[240px] hover:underline'
        to={`/product/${id}`}>{title}</Link>
        <br />
        <div className='flex justify-between items-center gap-3'>
        <div className='flex justify-center items-center gap-3 border w-[80px] mt-3'>
          <Minus onClick={()=> decreaseAmount(id)} size={15} className='cursor-pointer'/>
          <span>{amount}</span>
          <Plus onClick={()=>increaseAmount(id)} size={15} className='cursor-pointer'/>
        </div>
           
          <div>
            <span className='text-lg font-bold text-lime-600'>${price * amount}</span>
          </div> 

          <X size={18} onClick={()=>(removeFromCart(id))} className='absolute right-0 top-4 cursor-pointer'/>
        
        </div>
        
        
    </div>
    
  </div>
  );
};

export default CartItem;
