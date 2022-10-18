import React from 'react'
import styled from 'styled-components'
import ball from '../images/ball.jpg'
import Product from './Product'
import {device} from './sizes'

const ProductsStyled = styled.section`

  .container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    

    @media ${device.laptop} { 
      display: flex;
    }
  }

  .banner {
    position: relative;
    width: 90%;
    max-width: 530px;
    margin: 0 auto;

    @media ${device.laptop} { 

    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 40%;
    color: white;
    width: 60%;
  }

  .title {
    line-height: 1.28;
    letter-spacing: -0.06px;
    font-size: 50px;
    font-weight: normal;
    margin-top: 40px;
    margin-bottom: 40px;

    span {
      font-weight: bold;
    }
  }

  .description {
    line-height: 1.67;
    letter-spacing: 0.51px;
    font-size: 18px;
    width: 300px;
  }

  .list {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-x: auto;
    padding: 1rem;

    > div {
      margin: 1rem;
    }

  }
`

export default function Products() {
  return (
    <ProductsStyled>
      <div className="container">
        <div className="banner">
          <img src={ball} alt="" />
          
          <div className="content">
            <h3 className="title">
              Nuestras <span> Raquetas</span>
            </h3>
            <p className="description">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
          </div>
        </div>

        <div className="list">

          <Product id="1"/>
          <Product id="2"/>
          <Product id="3"/>
          
        </div>
        
      </div>

      


    </ProductsStyled>
  )
}
