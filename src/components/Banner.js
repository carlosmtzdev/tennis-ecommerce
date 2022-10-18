import React from 'react'
import styled from 'styled-components'
import banner from '../images/banner.jpg'
import Button from './Button'
import {colors} from './colors'
import {device} from './sizes'

const BannerStyled = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  max-height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-image: url(${banner});
  background-position: center center;
  


  @media ${device.laptop} { 
    background-position: initial;
    max-height: 1080px;
    
  }

  .container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .content {
    color: white;
  }

  .title {
    line-height: 1.28;
    letter-spacing: -0.05px;
    max-width: 700px;
    font-size: 53px;
    margin-bottom: 30px;
    font-weight: normal;

    @media ${device.laptop} { 

    }
  }

  .tennis {
    font-weight: bold;
    color: ${colors.green};
  }

`

export default function Banner() {
  return (
    <BannerStyled>
      <div className="container">

        <div className="content">
          <h3 className="title">
            Las mejores raquetas para jugar 
            <span className="tennis"> Tennis</span>
          </h3>
          <div className="cta">
            <Button color="white">
              Acerca de nosotros
            </Button>
          </div>
        </div>        

      </div>
    </BannerStyled>
  )
}
