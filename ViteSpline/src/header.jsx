import React from 'react'
import Header_link from './components/header_link'
import Menu_component from './components/menu_component'

function Header() {
    return (
        <>
            <header
                className='fixed z-10'
            >
                <Menu_component />
            </header>
        </>
    )
}

export default Header