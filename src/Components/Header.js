import React, {useState} from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


const Header = () => {
  const items = useSelector((state) => state.itemCounter)
  const dispatch = useDispatch();
  return (
    <Container>
        <h1>
            Fake Shop
        </h1>
        <div className='cartIcon'>
          
            <Badge color="secondary" badgeContent={items}>
              <ShoppingCartOutlinedIcon/>
            </Badge>
          
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
height: 80px;
width: 100%;
align-items: center;
justify-content: center;
text-align: center;
color: #fff;
background: #191970;
display: flex;

.cartIcon{
  position: absolute;
  left: 90%;
}
`