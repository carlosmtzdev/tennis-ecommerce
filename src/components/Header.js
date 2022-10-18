import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg';
import close from '../images/close.svg';
import open from '../images/open.svg';
import {device} from './sizes'
import {colors} from './colors'

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

  .open {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: 1rem;

    @media ${device.laptop} { 
      display: none;
    }

    img {
      width: 100%;
    }
  }
`

const LogoStyled = styled.div`
  display: flex;
  width: 37px;
  height: 37px;
  
`

const NavigationStyled = styled.nav`
  position: fixed;
  z-index: 9;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  background-color: white;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.3s ease;

  &.is-active {
    left: 0;
  }

  @media ${device.laptop} { 
    margin-left: 100px;
    margin-top: 25px;
    position: initial;
    width: initial;
    height: initial;
    z-index: initial;
    background: none;
    padding: 0;
    box-shadow: none;
  }

  .close {
    cursor: pointer;

    @media ${device.laptop} { 
      display: none;
    }
  }
  

  ul {
    list-style: none;
    text-align: center;
    margin-top: 2rem;

    @media ${device.laptop} { 
      display: flex;
      margin-top: 0rem;
    }
  }

  li:not(:last-child) {
    margin-bottom: 2rem;

    @media ${device.laptop} { 
      margin-right: 2rem;
    }
  }

  li {
    letter-spacing: 1.5px;
    color: ${colors.text};
    font-size: 1.5rem;

    @media ${device.laptop} { 
      font-size: 1rem;
      color: white;
    }

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
  

  @media ${device.laptop} { 
    margin-top: 25px;
  }

  p {
    padding: 1rem;
  }

  .active {
    font-weight: bold;
  }
`

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <HeaderStyled>
      <div className="container">

        <div className="open" onClick={toggleMenu}>
          <img src={open} className="App-logo" alt="close nav" />
        </div>

        <LogoStyled>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoStyled>

        <NavigationStyled className={`${openMenu ? "is-active" : ""}`}>

          <div className="close" onClick={toggleMenu}>
            <img src={close} className="App-logo" alt="close nav" />
          </div>

          <ul className="nav-container">
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
