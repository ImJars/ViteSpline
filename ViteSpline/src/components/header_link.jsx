import React from 'react'

function Header_link({ classNames, name_link, section_link}) {
    return (
        <>
            <a  
                className={ `${ classNames } text-lg font-bold`  } 
                href={ section_link}
            >
                <li>
                    { name_link }
                </li>
            </a>
        </>
    )
}

export default Header_link