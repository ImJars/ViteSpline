import React from 'react'
import Header_link from './components/header_link'

function Header() {
    return (
        <>
            <header
                className='fixed bg-background w-full flex justify-between items-center px-20 py-5 z-10'
            >
                <div>
                    <a 
                        href="https://github.com/ImJars"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <h1
                            className='text-2xl font-bold tracking-wider
                                    text-color_dark_blue'
                        >
                            Jars.
                        </h1>
                    </a>
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
                            name_link='Blog'
                            section_link='#'
                        />
                        <Header_link
                            classNames={'bg-color_dark_blue px-6 py-2 rounded-md text-white'}
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