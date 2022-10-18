import React from 'react'
import styled from 'styled-components'
import linkedin from '../images/linkedin.svg'
import vimeo from '../images/vimeo.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import logo from '../images/logo.svg'
import {colors} from './colors'

const FooterStyled = styled.footer`
  background-color: ${colors.green};
  

  .container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 4rem;
  }

  .nav {
    display: flex;
    list-style: none;
    margin-bottom: 1rem;

    li {
      margin-right: 3rem;
      
      font-size: 13px;
      line-height: normal;
      letter-spacing: 1.14px;
      color: #2b3049;

      &.active {
        font-weight: bold;
      }
    }
  }

  .section {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .social img {
    margin-right: 12px;
  }

  .logo img {
    width: 55px;
    height: 55px;
  }

`

export default function Footer() {
  return (
    <FooterStyled>
      
      <div className="container">
        

        <ul className="nav">
          <li className="active">Inicio</li>
          <li>Acerca de nosotros</li>
          <li>Historia</li>
          <li>Contacto</li>
        </ul>

        <div className="section">
          <div className="social">
            <img src={linkedin} alt="Linkedin" />
            <img src={vimeo} alt="Vimeo" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
          </div>

          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        

      </div>

    </FooterStyled>
  )
}
