import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderedList = products.map((product) =>{
        const {id, title, image, price, category} = product;
        return(   
        <Container key={id}>
            <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: "inherit" }}>
            <div className='product'>
                <img src={image} alt={title}/>
                <h1>${price}</h1>
                <h2>{category}</h2>
                <p>{title}</p>
            </div>
            </Link>
        </Container>)
    })
    console.log("renderedList",renderedList)

    return (
    <ProductContent>
    {renderedList}
    </ProductContent>
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

const ProductContent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;