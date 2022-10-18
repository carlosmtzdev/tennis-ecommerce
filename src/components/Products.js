import React from 'react'
import styled from 'styled-components'
import ball from '../images/ball.jpg'
import prev from '../images/arrow-white.svg'
import Product from './Product'
import {device} from './sizes'
import {colors} from './colors'

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

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .content {
    padding: 1rem;
    background-color: ${colors.grey};

    @media ${device.laptop} { 
      position: absolute;
      top: 0;
      left: 40%;
      color: white;
      width: 60%;
    }
  }

  .title {
    line-height: 1.28;
    letter-spacing: -0.06px;
    font-size: 50px;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;

    @media ${device.laptop} { 
      margin-top: 40px;
      margin-bottom: 40px;
    }

    span {
      font-weight: bold;
    }
  }

  .description {
    line-height: 1.67;
    letter-spacing: 0.51px;
    font-size: 18px;
    
    @media ${device.laptop} {
      width: 300px;
    }
  }



  .dot {
    margin-top: 2rem;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    margin-right: 1.5rem;
  }

  .dot.active {
    background-color: ${colors.green};
  }

  .nav {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    img {
      display: block;
    }
  }

  .prev, .next {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    img {
      width: 10px;
    }
  }

  .prev {
    border: 1px solid white;
    img {
      transform: rotate(180deg);
    }
  }

  .next {
    background-color: ${colors.green};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .list {
    flex-grow: 1;
    display: flex;
    align-items: center;
    overflow-x: auto;
    padding: 1rem;
    background-color: white;

    @media ${device.laptop} { 

    }

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

          <img src={ball} alt="Ball tennis" />
          
          <div className="content">
            <h3 className="title">
              Nuestras <span> Raquetas</span>
            </h3>
            <p className="description">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>

            <div className="dots">
              <span className="dot  active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>  
            </div>
            <div className="nav">
              <div className="prev">
                <img  src={prev} alt="Prev" />
              </div>
              <div className="next">
                <img  src={prev} alt="Prev" />
              </div>
            </div>
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
