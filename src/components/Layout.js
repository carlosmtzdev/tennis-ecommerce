import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.main`
  font-family: HelveticaNeue, 'Helvetica', 'Arial', sans-serif;
`

export default function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}
