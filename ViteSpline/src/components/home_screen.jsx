import React from 'react'
import Spline from '@splinetool/react-spline'

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
                            Hello!
                        </h1>
                        <h2
                            className='text-7xl font-bold'
                        >
                            I'm Software Developer
                        </h2>
                        <h3
                            className='text-5xl font-bold text-color_orange mt-2'
                        >
                            I build things for the web.
                        </h3>
                        <p
                            className='text-md w-2/3 mt-4'
                        >
                            I'm a software developer specializing in creating exceptional 
                            products and digital experiences. I am currently focused on 
                            creating <font className='text-color_orange '>Web3</font> technology products.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home_screen