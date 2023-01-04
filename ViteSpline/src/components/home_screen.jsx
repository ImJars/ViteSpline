import React from 'react'
import Spline from '@splinetool/react-spline'

function Home_screen() {
    return (
        <>
            <section
                className='w-full flex justify-center items-center h-full'
            >
                <div
                    className='w-1/2 flex justify-center'
                >
                    <div>
                        <h1>
                            Hello!
                        </h1>
                        <h2>
                            I'm a full-stack web developer.
                        </h2>
                        <h3>
                            My name is <span className='text-color_orange'>Angel</span> and I'm a full-stack web developer.
                        </h3>
                    </div>
                </div>
                <div
                    className='w-1/2'
                >
                    <Spline scene='https://prod.spline.design/lbZpNCqArKh0vxsY/scene.splinecode'/>
                </div>
            </section>
        </>
    )
}

export default Home_screen