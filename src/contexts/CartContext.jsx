import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  //set total 

useEffect(()=>{
  const total = cart.reduce((accumulator, currentItem)=>
    {
      return accumulator + currentItem.amount * currentItem.price;
    },0)
    setTotal(total);
})


  //item amount state

  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>
        {
        return accumulator + currentItem.amount;
        }
      , 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //add to cart

  const addToCart = (product, id)=>{
    const newItem = {...product, amount: 1};
    // check if the item is already in the cart
    const CartItem = cart.find((item)=> {
      return item.id === id;
    });
    
    if(CartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return {...item, amount: item.amount + 1};
        } else {
          return item;
        }
    });
    setCart(newCart);
  }
  else {
    setCart([...cart, newItem]);
  }
  };
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };
  //clear cart
  const clearCart = () => {
    setCart([]);
  }
  //increase amount
  const increaseAmount = (id)=>{
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
    }
    //decrease amount
    const decreaseAmount = (id)=>{
      const cartItem = cart.find((item) => {return item.id === id});
      
      if( cartItem ) {
        const newCart = [...cart].map((item) => {
          if(item.id === id){
            return {...item, amount: cartItem.amount - 1};
          } else {
            return item;
          }
        })
        setCart(newCart);
      } 
        if (cartItem.amount < 2){
          removeFromCart(id);
        }
    }
  

  return <CartContext.Provider value={{
    cart, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    increaseAmount,
    decreaseAmount,
    itemAmount,
  total,}}>{children}</CartContext.Provider>;
};

export default CartProvider;
