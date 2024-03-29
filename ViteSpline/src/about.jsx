import React from 'react'
import Title_component from './components/title_component'
import Img from '../src/assets/me.jpg'
import About_text from './components/about_text'
import About_card from './components/about_card'

function About({ refAboutMe }) {
    return (
        <>
            <section
                id='About'
                ref={ refAboutMe }
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
                            className='w-2/3 h-full grid my-auto justify-center content-center'
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
                            <div
                                className='flex mt-5 space-x-20'
                            >
                                <div>
                                    <About_text
                                        about='Name:'
                                        text='Angel Ramirez'
                                    />
                                    <About_text
                                        about='Email:'
                                        text='hi.legacyier@gmail.com'
                                    />
                                </div>
                                <div>
                                    <About_text
                                        about='Phone:'
                                        text='+52 55 2914 7674'
                                    />
                                    <About_text
                                        about='Work status:'
                                        text='Software Developer'
                                    />
                                </div>
                            </div>
                            <div
                                className='flex mt-10 space-x-10'
                            >
                                <a href="#">
                                    <button
                                        className='bg-color_yellow px-6 py-2 rounded-md  font-bold'
                                    >
                                        Download CV
                                    </button>
                                </a>
                                <a href="#">
                                    <button
                                        className='bg-color_yellow px-6 py-2 rounded-md  font-bold'
                                    >
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section
                        className='flex w-full justify-around'
                    >
                        <About_card 
                            title='Frontend Developer'
                        />
                        <About_card 
                            title='Frontend Developer'
                        />
                        <About_card 
                            title='Frontend Developer'
                        />
                        <About_card 
                            title='Frontend Developer'
                        />
                        <About_card 
                            title='Frontend Developer'
                        />
                        <About_card 
                            title='Frontend Developer'
                        />
                    </section>
                </div>
            </section>
        </>
    )
}

export default About