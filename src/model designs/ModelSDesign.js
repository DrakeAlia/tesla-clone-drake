import React from 'react'
import styled from 'styled-components'


const ModelSDesign = () => {
    return (
        <Wrap>Test</Wrap>
    )
}

export default ModelSDesign


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModelS.png');
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

