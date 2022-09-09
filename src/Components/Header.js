import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <h1>
            Fake Shop
        </h1>
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
`