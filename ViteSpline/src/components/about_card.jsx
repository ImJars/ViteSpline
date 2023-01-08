import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #373F51;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
`
function About_card({ title }) {
  return (
    <>
        <Card>
            <h1>{ title }</h1>
        </Card>
    </>
  )
}

export default About_card