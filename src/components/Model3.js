import React from 'react';
import styled from 'styled-components/macro'
import Fade from 'react-reveal/Fade';
import Header from './Header';
import { Link } from 'react-router-dom';

const Model3 = ({ backgroundImg }) => {
    return (
        <Container bgImage={backgroundImg}>
            <Header />
            <Fade bottom>
                <ItemText>
                    <h1>Model S</h1>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <Footer>
                        <FooterItem>3.1 s
                            <p>0-60 mph*</p></FooterItem>
                        <FooterItem>353
                            <p>Range (EPA est.)</p></FooterItem>
                        <FooterItem>AWD
                            <p>Dual Motor</p></FooterItem>
                    </Footer>
                    {/* <Link to='/model3/design'> */}
                    <Link to='/model3Design'>
                        <RightButton>
                            Order Now
                        </RightButton>
                    </Link>
                </ButtonGroup>
            </Fade>
        </Container>
    )
}

export default Model3


// Container for the Model 3 page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../media/teslaModel3Design.png');
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