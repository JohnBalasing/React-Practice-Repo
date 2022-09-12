import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../Redux/Actions/productActions'


const ProductList = () => {
const products = useSelector((state) => state)
const dispatch = useDispatch();

const fetchProducts = async () => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err) => {
        console.log("err",err)
});
dispatch(setProducts(response.data))
}

useEffect(() =>{
    fetchProducts()
},[])
console.log("products", products)

  return (
    <ProductComponent/>
  )
}

export default ProductList