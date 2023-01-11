import React from 'react'
import styled from 'styled-components'

const Menu_bar = styled.button`
    display: grid;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: end;
    .bar{
        display: grid;
        width: 50px;
        height: 5px;
        background-color: black;
        max-height: 10px;
        margin: 10px;
        :hover{
            background-color: #FF0000;
            width: 80px;
        }
    }
`
function Bar_component({ link }) {
    return (
      <>
        <Menu_bar
        >
          <a 
            href={ link }
            className='bar'/>  
        </Menu_bar>
      </>
    )
}

export default Bar_component