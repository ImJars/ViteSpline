import React from 'react'
import styled from 'styled-components'

const Menu_bar = styled.button`
    
`
function Bar_component({ link, nameLink }) {
    
    return (
      <>
        <Menu_bar
        >
          <a 
            href={ link }
            className='bar'>
              <h1 className='namelink'>
                { nameLink }
              </h1>
          </a>  
        </Menu_bar>
      </>
    )
}

export default Bar_component