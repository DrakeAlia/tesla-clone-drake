import styled from 'styled-components'

const Powerwall = () => {
    return (
        <Wrap>
            <ItemText>Test</ItemText>
        </Wrap>
    )
}

export default Powerwall

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