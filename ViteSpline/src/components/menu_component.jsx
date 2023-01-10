import React from 'react'
import styled from 'styled-components'

const Menu_bar = styled.div`
    width: 50px;
    height: 5px;
    background-color: black;
    margin: 5px 0;
    border-radius: 50px;
`
function Menu_component() {
    return (
        <section
            className='flex flex-col'
        >
            <Menu_bar />
            <Menu_bar />
            <Menu_bar />
            <Menu_bar />
            <Menu_bar />
        </section>
    )
}

export default Menu_component