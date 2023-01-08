import React from 'react'

function About_text({ about, text }) {
    return (
        <>
            <div
                className='flex items-center'
            >
                <font className='text-color_yellow'>&#9658;&nbsp;</font>
                <h1
                    className='font-bold'
                >
                    &nbsp;{ about }
                </h1>
                <h2>
                    &nbsp;{ text }
                </h2>
            </div>
        </>
    )
}

export default About_text