import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from './colors'

const ButtonStyled = styled.div`
  border: 1px solid ${ ({color})=> color || colors.dark};;
  border-radius: 26px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: ${ ({color}) => color || colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 330px;
  min-width: 260px;
  font-weight: bold;

  ${ ({color}) => color && 
    css`
      svg {
        stroke: ${color};
      }
    `
  }

`

export default function Button({children, color}) {
  return (
    <ButtonStyled color={color}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="6" viewBox="0 0 23 6">
        <path fill="#29304A" fill-rule="evenodd" d="M22.908 2.7L20.428.128a.39.39 0 0 0-.579 0 .425.425 0 0 0 0 .6l1.778 1.843H.413C.165 2.57 0 2.74 0 3c0 .257.165.428.413.428h21.213l-1.779 1.844a.425.425 0 0 0 0 .6.44.44 0 0 0 .29.128.44.44 0 0 0 .289-.129l2.48-2.572a.531.531 0 0 0 .002-.6z"/>
      </svg>
    </ButtonStyled>
  )
}
