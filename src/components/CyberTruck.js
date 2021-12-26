import styled from 'styled-components/macro'

const CyberTruck = () => {
    return (
        <Wrap>
            <ItemText>Test</ItemText>
        </Wrap>
    )
}

export default CyberTruck

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
`

const ItemText = styled.div`
    padding-top: 15vh;
`