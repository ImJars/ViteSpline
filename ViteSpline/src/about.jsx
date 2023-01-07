import React from 'react'
import Title_component from './components/title_component'

function About() {
    return (
        <>
            <section
                className='w-full h-screen bg-background'
            >
                <div
                    className='mx-20 py-20'
                >
                    <Title_component 
                        Title_component='About Me'
                    />
                </div>
            </section>
        </>
    )
}

export default About