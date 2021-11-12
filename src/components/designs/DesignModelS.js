import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Logo from '../Logo';



const ModelSDesign = ({backgroundImg}) => {
    useEffect(() => {
        // window.scrollTo(0, 0)        
        console.log('im here')
      },[]);
      
    const [pricewidget, setPriceWidget] = useState(null)
    const [allWheelDrive, setAllWheelDrive] = useState(null)
    const [paint, setPaint] = useState(null)
    const [wheels, setWheels] = useState(null)
    const [interior, setInterior] = useState(null)

    return (
        <Wrap bgImage={backgroundImg}>
        <Logo />
        <WidgetNav>
        <ModelTitle>Model S</ModelTitle>
        <DeliveryTime>Est. Devilvery: June</DeliveryTime>
        <ModelPriceTab>
            <ModelPrice>Purchase Price</ModelPrice>
            <ModelPrice>Potential Savings*</ModelPrice>
        </ModelPriceTab>
        <ModelDetails>
            <ModelDetailsItem>375mi
            <ModelDetailsSubItem>Range (est.)</ModelDetailsSubItem>
            </ModelDetailsItem>
            <ModelDetailsItem>155mph
            <ModelDetailsSubItem>Top Speed</ModelDetailsSubItem>
            </ModelDetailsItem>
            <ModelDetailsItem>3.1sec
            <ModelDetailsSubItem>0-60mph</ModelDetailsSubItem>
            </ModelDetailsItem>
        </ModelDetails>
        <Motor>Dual Motor All-Wheel Drive
            <MotorModel>Model S</MotorModel>
        </Motor>
        <Motor>Tri Motor All-Wheel Drive
            <MotorModel>Model S Plaid</MotorModel>
        </Motor>
        <Desc>*Prices above include potential incentives and gas savings of $5,500.<p>Learn More</p></Desc>
        <Feature>Feature Details</Feature>

        <SubTitle>Paint</SubTitle>
        <Selector></Selector>
        <SelectorDesc>Pearl White Multi-Coat Included</SelectorDesc>
       
       <SubTitle>Wheels</SubTitle>
       <Selector></Selector>
       <SelectorDesc>21" Arachnid Wheels</SelectorDesc>
       <SelectorDesc>$4,500</SelectorDesc>
       <SelectorDesc>Range (est.): 375mi</SelectorDesc>

       <SubTitle>Interior</SubTitle>
       <Selector></Selector>
       <SelectorDesc>All Black Included</SelectorDesc>
       <SelectorDesc>Ebony Décor</SelectorDesc>
       <Feature>Feature Details</Feature>

       <SubTitle>Full Self-Driving Capability</SubTitle>
       <SelectorDesc>$10,000</SelectorDesc>
       <SubDetails>
           <SubDetailsItem>Navigate on Autopilot</SubDetailsItem>
           <SubDetailsItem>Auto Lane Change</SubDetailsItem>
           <SubDetailsItem>Autopark</SubDetailsItem>
           <SubDetailsItem>Summon</SubDetailsItem>
           <SubDetailsItem>Full Self-Driving Computer</SubDetailsItem>
           <SubDetailsItem>Traffic Light and Stop Sign Control</SubDetailsItem>
       </SubDetails>
       <SelectorDesc>Coming Soon</SelectorDesc>
       <SelectorDesc>Autosteer on city streets</SelectorDesc>
       <SelectorDesc>he currently enabled features require active driver 
        supervision and do not make the vehicle autonomous. The activation and use of these features 
        are dependent on achieving reliability far in excess of human drivers as demonstrated by 
        billions of miles of experience, as well as regulatory approval, which may take longer in 
        some jurisdictions. As these self-driving features evolve, your car will be continuously 
        upgraded through over-the-air software updates.
        </SelectorDesc>
        <BtnGroup>
            <Btn>Add</Btn>
            <Feature>Feature Details</Feature>
        </BtnGroup>
        

        <SubTitle>Order Your Model S</SubTitle>
        <DeliveryTime>Est. Delivery: June</DeliveryTime>
        <Btn>Continue Payment</Btn>

        </WidgetNav>
        <Footer>
            <FooterBtn>*</FooterBtn>
            <FooterItem>$100,990 Purchase price</FooterItem>
            <FooterItem>$95,490 After potential savings</FooterItem>
        </Footer>
        </Wrap>
    )
}

export default ModelSDesign

// Container for the whole page
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border-color: azure;
    /* background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModelSBlackDesign1.png') */
`

// Widget Container for the model details
const WidgetNav = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 5%;
    width: 300px;
    padding: 20px;
    border: solid green 5px;
`

// Model name
const ModelTitle = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    padding-top: 9px;
    color: #393c41;
    border: solid blue 5px;
`

// Model Price/Savings container
const ModelPriceTab = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Model Price/Savings
const ModelPrice = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Model detail container
const ModelDetails = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Model detail
const ModelDetailsItem = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Model Second detail
const ModelDetailsSubItem = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Motor type
const Motor = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Motor for type of model of car
const MotorModel = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Description
const Desc = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// The sub title of the models
const SubTitle = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// choose wheels/paint/ect. options
const Selector = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Sub title description
const SelectorDesc = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Sub title secondary details container
const SubDetails = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Sub title secondary details
const SubDetailsItem = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Buttons container
const BtnGroup = styled.div`
   
`

// Button
const Btn = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Feature details container
const Feature = styled.div`
    padding-top: 9px;
    color: #393c41;
    border: solid blue 5px;
`

// Bottom container 
const Footer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2px;
`

// Footer button arrow
const FooterBtn = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
    border: solid green 4px;
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
    border: solid green 4px;
`

