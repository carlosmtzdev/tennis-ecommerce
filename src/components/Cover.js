import React from 'react'
import styled from 'styled-components'
import athlete from '../images/athlete.jpg'

const CoverStyled = styled.section`
  .container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export default function Cover() {
  return (
    <CoverStyled>
      <div className="container">
        <div className="image">
          <img src={athlete} alt="" />
        </div>
      </div>
    </CoverStyled>
  )
}
