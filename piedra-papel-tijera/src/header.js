import React from 'react'
import styled from 'styled-components'
import Score from './score'

const HeaderStyled = styled.div`
  color: white;
  padding: 23px; 
  border-radius: .5em;
  border: 3px solid rgba(255, 255, 255, .29);
  h1{
    font-size: 18px;
    line-height: 16px;
    font-weight: 700px; 
    text-transform: uppercase; 
  }

`


function Header(){
  return(
    <HeaderStyled>
      <h1>
        Piedra <br /> Papel <br /> Tijera 
      </h1>
      <Score />
    </HeaderStyled>
  )
}

export default Header