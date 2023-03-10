import React, {useContext} from 'react';
//import prodict context
import { ProductContext } from '../contexts/ProductContext';
const Home = () => {
  //get products from the json response
  const { products } = useContext(ProductContext)
  console.log(products)

  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  console.log(filteredProducts)

  return <div>
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1'>
          {
            filteredProducts.map(product => {
              return <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}> 
                {product.title}
              </div>
            })
          }
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
