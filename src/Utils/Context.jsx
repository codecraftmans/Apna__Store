import axios from './Axios';
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const ProductContext = createContext();

function Context(props) {
    const [products, setproducts] = useState(null)

    const getProducts = async ()=>{
        try {
            
            const {data} = await axios("/products");
            
            setproducts(data)
            
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        getProducts()
    },[])
  return <ProductContext.Provider value={[products, setproducts]}>
    {props.children}
  </ProductContext.Provider>;
}
  

export default Context