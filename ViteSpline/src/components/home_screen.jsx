import React from 'react'
import Spline from '@splinetool/react-spline'
import styled from 'styled-components'

const Before = styled.div`
    .line{
        width: 30px;
        height: 3px;
        background-color: #FFA500;
        margin-right: 10px;
        border-radius: 50px;
    }
`
function Home_screen() {
    return (
        <>
            <section
                className='w-full flex justify-center items-center h-full z-0'
            >
                <div
                    className='w-full h-full relative'
                >
                    <Spline
                        scene='https://prod.spline.design/lbZpNCqArKh0vxsY/scene.splinecode'
                    />
                    <div
                        className='absolute top-[40%] left-[10%]'
                    >
                        <h1
                            className='text-lg font-bold'
                        >
                            Hello! My name is
                        </h1>
                        <h2
                            className='text-8xl font-bold'
                        >
                            Razam Smith
                        </h2>
                        <h3
                            className='text-4xl font-bold text-color_orange mt-2'
                        >
                            I build things for the web.
                        </h3>
                        <Before
                            className='text-md mt-4 flex items-center font-bold'
                        >   <div
                                className='line'
                            />
                            <p>
                                Freelancer & Full Stack Developer
                            </p>
                        </Before>
                        <a 
                            href="#"
                            className='text-md mt-5 flex items-center'
                        >
                            <button
                                className='bg-color_orange text-white px-4 py-2 rounded-md mt-4'
                            >
                                know more
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home_screen