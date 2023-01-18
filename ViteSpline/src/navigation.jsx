import React, { useEffect } from 'react'
import Menu_component from './components/menu_component'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import App from './App'
import About from './About'

function Navigation() {
    const { ref:refHome, inView:inViewHome } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    })
    const { ref:refAboutMe, inView:inViewAboutMe } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    })

    const animationHome = useAnimation()
    const animationAbout = useAnimation()

    useEffect(() => {
        if ( inViewHome ) {
            animationHome.start({
                width: '64px',
                color: '#000000',
                borderColor: '#D05D38',
                transition: {
                    type: 'spring', duration: .01
                }
            })
        }

        if ( !inViewHome ) {
            animationHome.start({
                width: '28px',
                borderColor: '#373F51',
                transition: {
                    type: 'spring', duration: .01
                }
            })
        }
            
    }, [inViewHome, animationHome])

    useEffect(() => {
        if ( inViewAboutMe ) {
            animationAbout.start({
                width: '64px',
                color: '#000000',
                borderColor: '#D05D38', 
                transition: {
                    type: 'spring', duration: .01
                }
            })
        }
        if ( !inViewAboutMe ) {
            animationAbout.start({
                width: '50px',
                borderColor: '#373F51',
                transition: {
                    type: 'spring', duration: .01
                }
            })
        }
    }, [inViewAboutMe, animationAbout])
    
    
    return (
        <>
            <section>
                <Menu_component 
                    animationHome={ animationHome }
                    animationAbout={ animationAbout }
                />
                <App 
                    refHome={ refHome }
                />
                <About 
                    refAboutMe={ refAboutMe }
                />
            </section>
        </>
    )
}

export default Navigation