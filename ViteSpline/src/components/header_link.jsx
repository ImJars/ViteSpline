import React from 'react'

function Header_link({ name_link, section_link}) {
    return (
        <>
            <a href={ section_link}>
                <li>
                    { name_link }
                </li>
            </a>
        </>
    )
}

export default Header_link