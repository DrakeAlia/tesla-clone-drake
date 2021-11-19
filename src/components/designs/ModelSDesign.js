import styled from 'styled-components'
import { useEffect } from 'react';
// import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../Logo';


const ModelSDesign = () => {
    useEffect(() => {      
        console.log('im here')
      },[]);
      
    // const [details, setDestails] = useState(null)
    // const [price, setPrice] = useState(null)
    // const [allWheelDrive, setAllWheelDrive] = useState(null)
    // const [paint, setPaint] = useState(null)
    // const [wheels, setWheels] = useState(null)
    // const [interior, setInterior] = useState(null)

    return (
        <Wrap>
        <Logo />
        <WidgetNav>
        <ModelTitle>Model S</ModelTitle>
        <DeliveryTime>Est. Devilvery: June</DeliveryTime>

        <ModelPriceContainer>
        <ModelPriceTab>
            <ModelPrice>Purchase Price</ModelPrice>
            <ModelPrice>Potential Savings*</ModelPrice>
        </ModelPriceTab>
        </ModelPriceContainer>

        <ModelDetailsBox>
            <ModelDetails>
            <ModelStats>375mi</ModelStats>
            <ModelDetailsItem>Range (est.)</ModelDetailsItem>
            </ModelDetails>
            <ModelDetails>
            <ModelStats>155mph</ModelStats>
            <ModelDetailsItem>Top Speed</ModelDetailsItem>
            </ModelDetails>
            <ModelDetails>
            <ModelStats>3.1sec</ModelStats>
            <ModelDetailsItem>0-60mph</ModelDetailsItem>
            </ModelDetails>
        </ModelDetailsBox>

        <MotorContainer>
        <MotorName>Dual Motor All-Wheel Drive</MotorName>
        <MotorBox>
            <MotorItem>Model S</MotorItem>
            <MotorItem>$89,490*</MotorItem>
        </MotorBox>
        </MotorContainer>
        <MotorContainer>
        <MotorName>Tri Motor All-Wheel drivers</MotorName>
        <MotorBox>
            <MotorItem>Model S Plaid</MotorItem>
            <MotorItem>$124,490*</MotorItem>
        </MotorBox>
        </MotorContainer>

{/* 
        <MotorContainer>
        <MotorName>D Motor All-Wheel Drive</MotorName>
        <MotorBox>
            <MotorItem>Model S</MotorItem>
            <MotorItem>$89,490*</MotorItem>
        </MotorBox>
        <MotorName>T Motor All-Wheel drivers</MotorName>
        <MotorBox>
            <MotorItem>Model S Plaid</MotorItem>
            <MotorItem>$124,490*</MotorItem>
        </MotorBox>
        </MotorContainer> */}

        <Desc>*Prices above include potential incentives and gas 
        savings of $5,500.
        <p>Learn More</p></Desc>
        <FeatureContainer>
        <Feature>Feature Details</Feature>
        </FeatureContainer>

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
       <FeatureContainer>
       <Feature>Feature Details</Feature>
       </FeatureContainer>

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
       <SubSelectorP>The currently enabled features require active driver 
        supervision and do not make the vehicle autonomous. The activation and use of these features 
        are dependent on achieving reliability far in excess of human drivers as demonstrated by 
        billions of miles of experience, as well as regulatory approval, which may take longer in 
        some jurisdictions. As these self-driving features evolve, your car will be continuously 
        upgraded through over-the-air software updates.
        </SubSelectorP>
        <BtnGroup>
            <Btn>Add</Btn>
            <Feature>Feature Details</Feature>
        </BtnGroup>

        <SubTitle>Order Your Model S</SubTitle>
        <DeliveryTime>Est. Delivery: June</DeliveryTime>
        <Btn>Continue Payment</Btn>

        </WidgetNav>
        <Footer>
        <FooterBox>
            <FooterBtn>
            <ExpandLessIcon></ExpandLessIcon>
            {/* <UpArrow src="/images/Up-Arrow.svg" /> */}
            </FooterBtn>
            <FooterItem>$100,990 Purchase price</FooterItem>
            <FooterItem>$95,490 After potential savings</FooterItem>
            </FooterBox>
        </Footer>
        </Wrap>
    )
}

export default ModelSDesign

// Container for the whole page
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100vw;
    height: 100vh; */
    border-color: solid azure 1px;
`

// Widget Container for the model details
const WidgetNav = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    overflow-y: scroll;
    width: 600px;
    border: solid green 4px;
    @media (max-width: 823px) {
    }
    border: solid green 5px;
`

// Model name
const ModelTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 25px;
    font-size: 40px;
    color: #393c41;
    border: solid green 1px;
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    padding-top: 10px;
    padding-bottom: 10px;
    border: solid green 1px;
`

// Container for all the model price boxes
const ModelPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 10px;
    width: inherit;
    color: #393c41;
    border: solid green 1px;
`

// Model Price/Savings container
const ModelPriceTab = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 100px;
    color: #393c41;
    border: solid green 1px;
`

// Model Price/Savings
const ModelPrice = styled.div`
    display: flex;
    cursor: pointer;
    color: #393c41;
    border: solid green 1px;
`

// Model detail container
const ModelDetailsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`

// Outer Container for model details
const ModelDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    color: #393c41;
    border: solid green 1px;
`

// Inner Container for the model's stats
const ModelStats = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`

// Model Second detail
const ModelDetailsItem = styled.div`
    display: flex;
    color: #393c41;
    border: solid green 1px;
`

// Container for the Motor section
const MotorContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #393c41;
    border: solid green 1px;
`

// Name of the either Dual or Tri motor
const MotorName = styled.div`
    display: flex;
    justify-content: flex-start;
    color: #393c41;
    border: solid green 1px;
`

// Container for the model and price for motor button
const MotorBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 100px;
    color: #393c41;
    border: solid green 1px;
`

// Either model name or price 
const MotorItem = styled.div`
    display: flex;
    justify-content: space-between;
    color: #393c41;
    border: solid green 1px;
    
`

// Description
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: inherit;
    color: #393c41;
    border: solid green 1px;
    p {
        display: flex;
        width: inherit;
    }
`

// The sub title of the models
const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding-top: 2px;
    color: #393c41;
    border: solid green 1px;
`

// choose wheels/paint/ect. options
const SubSelector = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`

// Sub title description
const SubSelectorDesc = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`

// Sub title secondary details container
const SubDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #393c41;
    border: solid green 1px;
`

// Sub title secondary details
const SubDetailsItem = styled.div`
    display: flex;
    align-items: flex-start;
    color: #393c41;
    border: solid green 1px;
`

// Sub title paragraph
const SubSelectorP = styled.div`
    display: flex;
    align-content: flex-start;
    color: #393c41;
    border: solid green 1px;
`

// Buttons container
const BtnGroup = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   border: solid green 1px;
`

// Button
const Btn = styled.div`
    display: flex;
    justify-content: center;
    background: #0000FF;
    color: #ffffff;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    border: solid green 1px;
`

// Feature container
const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
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
    padding: 5px;
    border: solid yellow 4px;
`

// Bottom container 
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 2px;
    border: solid green 1px;
    @media (max-width: 800px) {
        flex-direction: row;
    }
`

// Bottom container 
const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    border: solid green 1px;
`

// Footer button arrow
const FooterBtn = styled.div`
    display: flex;
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
    border: solid green 1px;
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
    border: solid green 1px;
`

// const UpArrow = styled.img`
//     height: 45px;
//     animation: animateDown infinite 2.5s;
//     overflow-x: hidden;
// `

