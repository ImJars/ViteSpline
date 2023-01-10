import React from 'react'
import styled from 'styled-components'

const Menu_bar = styled.a`
    width: 50px;
    height: 5px;
    background-color: #373F51;
    border-radius: 50px;
    border-right: 50px;
    margin: 10px;
    padding: 10px;
    :hover {
        width: 80px;
        transition: all 0.3s ease-in-out;
    }
`
function Bar_component({ link }) {
    return (
      <>
        <Menu_bar
          href={ link }
        >
          <h1 className='name'/>
        </Menu_bar>
      </>
    )
}

export default Bar_component