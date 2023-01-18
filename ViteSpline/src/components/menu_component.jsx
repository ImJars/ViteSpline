import React from 'react'

function Menu_component() {
    return (
        <>
            <nav
                className='fixed transform -translate-y-1/2 right-5 
                        sm:top-1/2 w-24 top-1/2 hidden sm:block z-50'
            >
                <a 
                    href="#"
                    className='group py-3 px-6 block relative'
                >
                    <div
                        className='w-16 border-themePurple h-0.5 
                                border-2 rounded-full transition-all 
                                duration-500 group-hover:w-16 
                                group-hover:border-color_orange'
                    >
                        <div
                            className='bg-themeDarkBlue bg-opacity-50 
                                    rounded-full backdrop-blur p-2 absolute 
                                    top-1/2 -translate-y-1/2 -translate-x-full 
                                    opacity-0 group-hover:-translate-x-[115%] 
                                    transition-all duration-700 group-hover:opacity-100'
                        >
                            <span
                                className='tracking-[.25em] text-xs text-themePurple 
                                        whitespace-nowrap transition-all duration-500'
                            >
                                HOME
                            </span>
                        </div>
                    </div>
                </a>
            </nav>
        </>
    )
}

export default Menu_component