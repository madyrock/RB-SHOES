import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Product Not Found
      </section>
    );
  }
  // destructure products
  const { title, price, image, description } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto ">
        {/* image and text wrapper */}

        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-[300px]" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] text-center lg:text-left">{title}</h1>
            <div className="text-xl text-lime-600 font-medium mb-6">Rs. {price}</div>
            <p className="mb-8 max-w-[450px]">{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-lime-600 hover:bg-lime-700 px-8 py-2 text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
