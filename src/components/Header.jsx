import { ShoppingBag, Sidebar } from 'lucide-react';
import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import logo from "../img/logo.png";
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom';


const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  return <div className=' flex fixed w-full bg-white z-10 justify-between items-center py-3 px-10  shadow-md'>
    
    <Link to={"/"}>
     
      <div className='flex justify-center items-center gap-2'>
      <h1 className='text-gray-600 text-4xl lg:text-5xl font-bold'>FH</h1>
        <img className='w-[50px] h-[30px] lg:w-[70px] lg:h-[50px]' src={logo} alt="" />
      </div>
    </Link>
    <div>
    
    
    </div>
    <div  className='relative cursor-pointer' onClick={()=> setIsOpen(!isOpen)}><ShoppingBag size={30} /></div>
    <div className='bg-lime-500 rounded-full absolute right-8 top-10 text-lg w-[25px] h-[25px] flex justify-center items-center'>{itemAmount}</div>
  </div>
};

export default Header;
