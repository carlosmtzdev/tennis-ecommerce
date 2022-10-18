import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg';


const HeaderStyled = styled.header`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 25px;

  .container {
    display: flex;
    justify-content: center;
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
  }
`

const LogoStyled = styled.div`
  display: flex;
  width: 37px;
  height: 37px;
`

const NavigationStyled = styled.nav`
  margin-left: 100px;
  margin-top: 25px;

  ul {
    list-style: none;
    display: flex;
  }

  li:not(:last-child) {
    margin-right: 2rem;
  }

  li {
    letter-spacing: 1.5px;
    
    
    &:hover {
      cursor: pointer;
      border-bottom-color: white;
      font-weight: bold;
    }

    &.active {
      border-bottom-color: white;
      font-weight: bold;

      &:after {
        content: "";
        display: block;
        width: 17px;
        border-bottom: 2px solid #fff;
        margin-top: 5px;
      }
    }
  }
`

const LocateStyled = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 25px;

  p {
    padding: 1rem;
  }

  .active {
    font-weight: bold;
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <div className="container">

        <LogoStyled>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoStyled>

        <NavigationStyled>
          <ul className="navigation__container">
            <li className="active">Inicio</li>
            <li>Acerca de nosotros</li>
            <li>Historia</li>
            <li>Contacto</li>
          </ul>
        </NavigationStyled>

        <LocateStyled>
          <p className="active">ES</p>
          <p>EN</p>
        </LocateStyled>

      </div>
    </HeaderStyled>
  )
}
