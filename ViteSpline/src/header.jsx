import React from 'react'
import Header_link from './components/header_link'

function Header() {
    return (
        <>
            <header
                className='flex justify-between items-center px-20 py-10'
            >
                <div>

                </div>
                <div>
                    <ul
                        className='flex space-x-16'
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
                            name_link='Services'
                            section_link='#'
                        />
                        <Header_link
                            name_link='Portfolio'
                            section_link='#'
                        />
                        <Header_link
                            classNames={'bg-color_dark_blue py-2 px-6 rounded-full text-white'}
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