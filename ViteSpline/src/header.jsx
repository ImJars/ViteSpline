import React from 'react'
import Header_link from './components/header_link'

function Header() {
    return (
        <>
            <header
                className='flex justify-between items-center p-4'
            >
                <div>

                </div>
                <div>
                    <ul
                        className='flex space-x-4'
                    >
                        <Header_link 
                            name_link='Home'
                            section_link='#'
                        />
                        <Header_link
                            name_link='About'
                            section_link='#'
                        />
                        <Header_link
                            name_link='Contact'
                            section_link='#'
                        />
                        
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header