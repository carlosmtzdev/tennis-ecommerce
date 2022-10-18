import React from 'react'
import styled from 'styled-components'
import product from '../images/product.jpg'
import {colors} from './colors'

const ProductStyled = styled.div`
  border-radius: 21px;
  background-color: ${colors.grey};
  padding: 1rem 17px;

  .id {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: ${colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 3rem;
  }


`

export default function Product({id}) {
  return (
    <ProductStyled>
      <div className="id">{id}</div>
      <div className="image">
        <img src={product} alt="" />
      </div>
    </ProductStyled>
  )
}
