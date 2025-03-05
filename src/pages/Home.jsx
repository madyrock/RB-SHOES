import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';



const Home = () => {
  //import product context
  const {products} = useContext(ProductContext);
  
  const filteredProducts = products.filter((item =>  {
    return (item.category === 
"men's clothing" || item.category === "women's clothing")
  }))
  return <div>
    <Hero />
  
    <section className='py-16'>
      <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm md:max-w-none mx-auto md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id}/>
            })}
          </div>
      </div>
    </section>
  </div>
  
};

export default Home;
