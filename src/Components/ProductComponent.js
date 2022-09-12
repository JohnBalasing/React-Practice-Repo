import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderedList = products.map((product) =>{
        const {id, title, image, price, category} = product;
        <Container key={id}>
            <div className='product'>
                <img src='image' alt={title}>{image}</img>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <h2>{category}</h2>
            </div>
        </Container>
    })

    return (
    <>
    {renderedList}
    </>
    )
 };

export default ProductComponent


const Container = styled.div`
align-items: center;
justify-content: center;
width: 300px;
height: 300px;
border: 1px solid black;
border-radius: 4px;
margin: 10px;
box-shadow: 3px 3px grey;

.product{
    align-items: center;
    justify-content: center;
}

img{
    width: 100px;
    height: 100px;
}
`;