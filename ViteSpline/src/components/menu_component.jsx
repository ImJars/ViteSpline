import React from 'react'
import Bar_component from './bar_component'

function Menu_component() {
    return (
        <section
            className='grid justify-items-end'
        >
            <Bar_component 
                link={'#'}
            />
            <Bar_component 
                link={'#'}
            />
            <Bar_component 
                link={'#'}
            />
            <Bar_component 
                link={'#'}
            />
            <Bar_component 
                link={'#'}
            />

        </section>
    )
}

export default Menu_component