import React from 'react';
import styled from 'styled-components/macro'
import Fade from 'react-reveal/Fade';
import Header from './Header';
import { Link } from 'react-router-dom';
// import carX from "../media/teslaModelXDesign.png"


const ModelX = ({ backgroundImg }) => {
    return (
        <Container bgImage={backgroundImg}>
            <Header />
            <Fade bottom>
                <ItemText>
                    <h1>Model X</h1>
                    <p>Plaid</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <Footer>
                        <FooterItem>340 mi
                            <p>Range (est.)</p></FooterItem>
                        <FooterItem>2.5s
                            <p>0-60 mph*</p></FooterItem>
                        <FooterItem>9.9s
                            <p>1/4 Mile</p></FooterItem>
                        <FooterItem>1,020 hp
                            <p>Peak Power</p></FooterItem>
                    </Footer>
                    {/* <Link to='/modelx/design'> */}
                    <Link to='/modelXDesign'>
                        <RightButton>
                            Order Now
                        </RightButton>
                    </Link>
                </ButtonGroup>
            </Fade>
        </Container>
    )
}

export default ModelX

// Container for the Model X page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../media/teslaModelXDesign.png');
`

// text for the model and type
const ItemText = styled.div`
    padding-top: 15vh;
`

// media for mobile/small screen 
const ButtonGroup = styled.div`
    display: flex;
    margin-left: 35px;
    margin-bottom: 40px;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

// Container for right button
const RightButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    height: 40px;
    width: 195px;
    color: #ffffff;
    border-radius: 100px;
    opacity: 1.15;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    margin-left: 35px;
`

// Container at the bottom of the page
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    cursor: pointer;
    margin: 8px;
    width: 517px;
`

// items inside the footer container 
const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`