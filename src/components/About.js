import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import {colors} from './colors'
import {device} from './sizes'

const AboutStyled = styled.section`
  background-color: ${colors.grey};
  padding: 72px 0 67px;

  .container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;

    @media ${device.laptop} { 
      display: flex;
    }
  }

  .tennis {
    font-size: 15px;
    font-weight: 500;
    line-height: 2;
    letter-spacing: 1.87px;
    color: ${colors.green};
    margin-right: 51px;
    margin-top: 5px;
  }

  .title {
    font-size: 50px;
    line-height: 1.14;
    letter-spacing: -0.06px;
    
    @media ${device.laptop} { 
      width: 555px;
    }
    
  }

  .content {

    @media ${device.laptop} { 
      display: flex;
      align-items: flex-end;
    }
  }

  .description {
    color: ${colors.text};
    line-height: 1.78;
    letter-spacing: 0.51px;
    width: 380px;
    margin-right: 160px;
    font-size: 18px;
    margin-top: 2rem;
  }

  .cta {
    margin-top: 2rem;
    
    @media ${device.laptop} { 
      margin-top: 0;
    }
  }
`

export default function About() {
  return (
    <AboutStyled>
      <div className="container">
        <p className="tennis">TENNIS</p>

        <div>
          <h3 className="title">Raquetas. Accesorios. Pelotas.</h3>

          <div className="content">
            <p className="description">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
            <div className="cta">
              <Button>
                HISTORIA
              </Button>
            </div>
          </div>

        </div>
      </div>
    </AboutStyled>
  )
}
