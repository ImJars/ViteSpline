import React from 'react'
import styled from 'styled-components'

const Before = styled.div`
    .line{
        width: 50px;
        height: 3px;
        background-color: #D05D38;
        margin-right: 10px;
        border-radius: 50px;
    }
`

function Title_component({ Title_component }) {
    return (
        <Before
            className='flex items-center'
        >
            <div className='line'/>
            <h1
            className='text-3xl font-bold text-color_dark_blue'
            >
                { Title_component }
            </h1>
        </Before>
    )
}

export default Title_component