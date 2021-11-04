import React from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Header from './Header';
import { BrowserRouter as Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Model3Design from '../designs/Model3Design';

const Model3 = ({backgroundImg}) => {
    return (
        <Container bgImage={backgroundImg}>
        <Header />
            <Fade bottom>
            <ItemText>
            <h1>Model 3</h1>
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
                <RightButton>
                <Link to='/model3/design'>
                Order Now
                </Link>
                </RightButton>
            </ButtonGroup>
            </Fade>
        </Container> 
    )
}

export default Model3


// Container for the Model S page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModel3.png');
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
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
    color: white;
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
`