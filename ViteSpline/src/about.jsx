import React from 'react'
import Title_component from './components/title_component'
import Img from '../src/assets/me.jpg'

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
                    <div
                        className='w-full h-full flex justify-center my-20'
                    >
                        <div
                            className='w-1/3 h-full relative'
                        >
                            <div className='absolute bg-color_orange'/>
                            <img src={ Img } alt="" />
                        </div>
                        <div
                            className='w-2/3 h-full flex flex-col justify-center'
                        >
                            <h1
                                className='text-4xl font-bold'
                            >
                                Do some awesome stuff with me.
                            </h1>
                            <h2
                                className='mt-5'
                            >
                                Hi! My name in <font className='font-bold'>Angel ramirez</font> and I'm a Frontend Developer
                                from Guatemala. I'm a self-taught developer who loves to 
                                learn new things and create awesome stuff. I'm currently working as a 
                                Frontend Developer at Wolox and I'm also a freelancer. I'm passionate 
                                about JavaScript and React and I love to create responsive and accessible
                                websites.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About