import React from 'react'
import styled from 'styled-components'
import Token from './token';

const TableStyled = styled.div`
  display: flex; 
  flex-wrap: wrap;
  gap: 10px; 

`

function Table(){
  return(
    <TableStyled>
      <Token name = "Piedra"/> 
      <Token name = "Papel"/> 
      <Token name = "Tijera"/> 
    </TableStyled>
  )
}

export default Table 