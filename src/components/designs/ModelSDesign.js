import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Logo from '../Logo';



const ModelSDesign = ({backgroundImg}) => {
    useEffect(() => {
        // window.scrollTo(0, 0)        
        console.log('im here')
      },[]);
      
    const [price, setPrice] = useState(null)
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
        <SubSelector></SubSelector>
        <SubSelectorDesc>Pearl White Multi-Coat Included</SubSelectorDesc>
       
       <SubTitle>Wheels</SubTitle>
       <SubSelector></SubSelector>
       <SubSelectorDesc>21" Arachnid Wheels</SubSelectorDesc>
       <SubSelectorDesc>$4,500</SubSelectorDesc>
       <SubSelectorDesc>Range (est.): 375mi</SubSelectorDesc>

       <SubTitle>Interior</SubTitle>
       <SubSelector></SubSelector>
       <SubSelectorDesc>All Black Included</SubSelectorDesc>
       <SubSelectorDesc>Ebony Décor</SubSelectorDesc>
       <Feature>Feature Details</Feature>

       <SubTitle>Full Self-Driving Capability</SubTitle>
       <SubSelectorDesc>$10,000</SubSelectorDesc>
       <SubDetails>
           <SubDetailsItem>Navigate on Autopilot</SubDetailsItem>
           <SubDetailsItem>Auto Lane Change</SubDetailsItem>
           <SubDetailsItem>Autopark</SubDetailsItem>
           <SubDetailsItem>Summon</SubDetailsItem>
           <SubDetailsItem>Full Self-Driving Computer</SubDetailsItem>
           <SubDetailsItem>Traffic Light and Stop Sign Control</SubDetailsItem>
       </SubDetails>
       <SubSelectorDesc>Coming Soon</SubSelectorDesc>
       <SubDetailsItem>Autosteer on city streets</SubDetailsItem>
       {/* <SubSelectorP>The currently enabled features require active driver 
        supervision and do not make the vehicle autonomous. The activation and use of these features 
        are dependent on achieving reliability far in excess of human drivers as demonstrated by 
        billions of miles of experience, as well as regulatory approval, which may take longer in 
        some jurisdictions. As these self-driving features evolve, your car will be continuously 
        upgraded through over-the-air software updates.
        </SubSelectorP> */}
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
    width: 400px;
    border: solid green 4px;
    @media (max-width: 823px) {
    }
`

// Model name
const ModelTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid turquoise 3px;
`

// Model Price/Savings container
const ModelPriceTab = styled.div`
    display: flex;
    justify-content: space-between;
    color: #393c41;
    border: solid green 3px;
`

// Model Price/Savings
const ModelPrice = styled.div`
    display: flex;
    color: #393c41;
`

// Model detail container
const ModelDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #393c41;
`

// Model detail
const ModelDetailsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #393c41;
`

// Model Second detail
const ModelDetailsSubItem = styled.div`
    display: flex;
    color: #393c41;
`

// Motor type
const Motor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #393c41;
    border: solid pink 3px;
`

// Motor for type of model of car
const MotorModel = styled.div`
    display: flex;
    color: #393c41;
    border: solid teal 3px;
`

// Description
const Desc = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #393c41;
    border: solid midnightblue 3px;
`

// The sub title of the models
const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding-top: 2px;
    color: #393c41;
    border: solid lightgoldenrodyellow 3px;
`

// choose wheels/paint/ect. options
const SubSelector = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
`

// Sub title description
const SubSelectorDesc = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid plum 3px;
`

// Sub title secondary details container
const SubDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #393c41;
    border: solid orange 3px;
`

// Sub title secondary details
const SubDetailsItem = styled.div`
    display: flex;
    align-items: flex-start;
    color: #393c41;
    border: solid red 3px;
`

// Sub title paragraph
const SubSelectorP = styled.div`
    display: flex;
    align-content: flex-start;
    color: #393c41;
    border: solid blue 3px;
`

// Buttons container
const BtnGroup = styled.div`
   
`

// Button
const Btn = styled.div`
    padding-top: 5px;
    color: #393c41;
    border: solid lemonchiffon 3px;
`

// Feature details container
const Feature = styled.div`
    display: flex;
    justify-content: center;
    background: #D3D3D3;
    color: #393c41;
    text-transform: uppercase;
    border-radius: 100px;
    cursor: pointer;
    border: solid yellow 3px;
`

// Bottom container 
const Footer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2px;
    @media (max-width: 800px) {
        flex-direction: row;
    }
`

// Footer button arrow
const FooterBtn = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
    border: solid green 3px;
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
    border: solid green 3px;
`

