import React from 'react'
import styled from 'styled-components'


const ModelXDesign = () => {
    return (
        <Wrap>
        <ItemText>Test</ItemText>
        </Wrap>
    )
}

export default ModelXDesign

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;  
`