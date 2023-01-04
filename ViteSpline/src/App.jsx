import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`
const Text = styled.h1`
  font-size: clamp(0.75rem, 0.0909rem + 4.2182vw, 8rem);
`
function App() {
  return (
    <>
      <section>
        <header
          className='w-full h-16 bg-red-900 grid justify-center content-center'
        >
          <Text
            className='text-xs font-bold text-white'
          >
            Hello! this My App
          </Text>
        </header>
        {/* <Container>
          <div className='bg-red-500 h-64 m-2'>1</div>
          <div className='bg-red-500 h-64 m-2'>2</div>
          <div className='bg-red-500 h-64 m-2'>3</div>
          <div className='bg-red-500 h-64 m-2'>4</div>
        </Container> */}
        <Container>
          <div className='w-full h-screen'>
            <Spline scene='https://prod.spline.design/lbZpNCqArKh0vxsY/scene.splinecode'/>
          </div>
        </Container>
      </section>
    </>
  )
}

export default App
