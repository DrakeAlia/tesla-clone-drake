import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Header from './Header';

const ModelS = ({title, description, rightBtnText, backgroundImg}) => {
    return (
        <Wrap2 bgImage={backgroundImg}>
        <Header />
            <Fade bottom>
            <ItemText>
            <h1>Model S</h1>
            <p>Plaid</p>
            </ItemText>
        </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
            <Footer>
            <p>Test</p>
            </Footer>
                <RightButton>
                <p>Order Now</p>
                </RightButton>
            </ButtonGroup>
            </Fade>
            </Buttons>
        </Wrap2>
    )
}

export default ModelS


const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModelS.png');
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

// media for mobile/small screen 
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

const RightButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    border-radius: 100px;
    opacity: 1.15;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const Buttons = styled.div`
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
