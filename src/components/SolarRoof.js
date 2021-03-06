import React from 'react'
import styled from 'styled-components/macro'
import Fade from 'react-reveal/Fade';
import Header from './Header';
import { Link } from 'react-router-dom';

const SolarRoof = ({ backgroundImg }) => {
    return (
        <Container bgImage={backgroundImg}>
            <Header />
            <Fade bottom>
                <ItemText>
                    <h1>Solar Roof</h1>
                    <p>Transform your roof and produce clean energy</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <Footer>
                        <FooterItem>396 mi
                            <p>Range (EPA est)</p></FooterItem>
                        <FooterItem>1.99s
                            <p>0-60 mph</p></FooterItem>
                        <FooterItem>200 mph
                            <p>Top Speed</p></FooterItem>
                        <FooterItem>1,020 hp
                            <p>Peak Power</p></FooterItem>
                    </Footer>
                    <Link to='/energy/design'>
                        <RightButton>
                            Order Now
                        </RightButton>
                    </Link>
                </ButtonGroup>
            </Fade>
        </Container>
    )
}

export default SolarRoof

// Container for the Solar Roof page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    color: #ffffff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../media/teslaStormRoof.png');
`

const ItemText = styled.div`
    padding-top: 15vh;
`

// media for mobile/small screen 
const ButtonGroup = styled.div`
    display: flex;
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


