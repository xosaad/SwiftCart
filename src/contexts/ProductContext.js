import React, {createContext, useState, useEffect} from 'react';

//creating context

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  //product state
  const [products, setProducts] = useState([])
  //fetch from the the API
  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data)
      
      
    };
    fetchProducts()
  },[]);
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
