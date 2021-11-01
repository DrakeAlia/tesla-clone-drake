import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Model3 = ({backgroundImg}) => {
    return (
        <ModelContainer bgImage={backgroundImg}>
        <Header />
            <Fade bottom>
            <ItemText>
            <h1>Model 3</h1>
            </ItemText>
        </Fade>
            {/* <Buttons> */}
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
                <p>Order Now</p>
                </RightButton>
            </ButtonGroup>
            </Fade>
            {/* </Buttons> */}
        </ModelContainer> 
    )
}

export default Model3


// Container for the Model S page
const ModelContainer = styled.div`
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
`

// const Buttons = styled.div`
// `

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
    /* color: white; */
`