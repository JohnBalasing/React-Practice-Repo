import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProducts, removeSelectedProducts } from '../Redux/Actions/productActions'
import axios from 'axios'
import styled from 'styled-components'
import { addSelectedItems, removeSelectedItems } from '../Redux/Actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const {image, title, category, description, price} = product
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log("productId",productId)

    const fetchProductDetails = async() => {  
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('error',err)
        })
        dispatch(setSelectedProducts(response.data))    
    }

    useEffect(() =>{
        (productId && productId !== '') && fetchProductDetails()
        return () => {
          dispatch(removeSelectedProducts())
        }
    },[productId])

  return (
    Object.keys(product).length === 0 
    ? 
    <h1>...Loading</h1> 
    :
    <ProductDetailDiv>
      <img src={image} />
      <div className='description'>
        <h1>{title}</h1>
          <h2>{category}</h2>
            <p>{description}</p>
              <h1>${price}</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(addSelectedItems())}>Add to Cart</button>
        <button onClick={() => dispatch(removeSelectedItems())}>Remove Item</button>
      </div>
      </div>
    </ProductDetailDiv>
  )
}

export default ProductDetails

const ProductDetailDiv = styled.div`
align-items: center;
justify-content: space-around;
display: flex;
margin-top: 20px;

img{
  height: 100%;
  width: 500px;
}

.description{
    display: block;
    width: 50%;
    height: 500px;
    justify-content: left;
    border: 1px solid grey;
    box-shadow: 4px 4px grey;
    border-radius: 5px;
    padding: 20px;

  p{
    font-style: italic;
    font-size: 20px;
    text-align: left;
  }
.buttons{
 

}



  button{
    width: 200px;
    font-size: 20px;
    font-weight: 700;
    background: tomato;
    border-radius: 5px;
    cursor: pointer;
  }
}

`;