import styled from 'styled-components'
import React, { useEffect } from 'react';



const ModelSDesign = () => {

    useEffect(() => {        
        console.log('im here')
      },[]);

    return (
        <Wrap>
        
        <ItemText>Test</ItemText>
        </Wrap>
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
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`