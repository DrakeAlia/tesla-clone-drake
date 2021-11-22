import styled from 'styled-components'
import { useEffect } from 'react';
// import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../Logo';


const TestDesign = () => {
    useEffect(() => {
        console.log('im here')
    }, []);

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
                <Title>Model S</Title>
                <DeliveryTime>Est. Devilvery: June</DeliveryTime>

                <Container>
                    <ModelPriceTab>
                        <ModelPrice>Purchase Price</ModelPrice>
                        <ModelPrice>Potential Savings*</ModelPrice>
                    </ModelPriceTab>
                </Container>

                <Container>
                    <Details>
                        <Stats>375mi</Stats>
                        <Item>Range (est.)</Item>
                    </Details>
                    <Details>
                        <Stats>155mph</Stats>
                        <Item>Top Speed</Item>
                    </Details>
                    <Details>
                        <Stats>3.1sec</Stats>
                        <Item>0-60mph</Item>
                    </Details>
                </Container>

                <Container>
                    <InnerContainer>
                        <MotorName>Dual Motor All-Wheel Drive</MotorName>
                        <MotorBox>
                            <MotorItem>Model S</MotorItem>
                            <MotorItem>$89,490*</MotorItem>
                        </MotorBox>
                    </InnerContainer>
                </Container>

                <Container>
                    <InnerContainer>
                        <MotorName>Tri Motor All-Wheel drivers</MotorName>
                        <MotorBox>
                            <MotorItem>Model S Plaid</MotorItem>
                            <MotorItem>$124,490*</MotorItem>
                        </MotorBox>
                    </InnerContainer>
                </Container>

                <Container>
                    <DescBox>
                        <Desc>The Prices above include potential incentives and gas
                            savings of $5,500.
                            <p>Learn More</p></Desc>
                    </DescBox>
                </Container>

                <Container>
                    <FeatureBox>
                        <Feature>Feature Details</Feature>
                    </FeatureBox>
                </Container>

                <Title>Paint</Title>
                <Selector></Selector>
                <Desc>Pearl White Multi-Coat Included</Desc>

                <Title>Wheels</Title>
                <Selector></Selector>
                <Desc>21" Arachnid Wheels</Desc>
                <Desc>$4,500</Desc>
                <Desc>Range (est.): 375mi</Desc>

                <Title>Interior</Title>
                <Selector></Selector>
                <Desc>All Black Included</Desc>
                <Desc>Ebony Décor</Desc>

                <Container>
                    <FeatureBox>
                        <Feature>Feature Details</Feature>
                    </FeatureBox>
                </Container>

                <Title>Full Self-Driving Capability</Title>
                <Desc>$10,000</Desc>
                <Details>
                    <Item>Navigate on Autopilot</Item>
                    <Item>Auto Lane Change</Item>
                    <Item>Autopark</Item>
                    <Item>Summon</Item>
                    <Item>Full Self-Driving Computer</Item>
                    <Item>Traffic Light and Stop Sign Control</Item>

                    <li>Navigate on Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Full Self-Driving Computer</li>
                    <li>Traffic Light and Stop Sign Control</li>

                    <Desc>Coming Soon</Desc>
                    <Item>Autosteer on city streets</Item>
                    <li>Autosteer on city streets</li>
                </Details>
                <Desc>The currently enabled features require active driver
                    supervision and do not make the vehicle autonomous. The activation and use of these features
                    are dependent on achieving reliability far in excess of human drivers as demonstrated by
                    billions of miles of experience, as well as regulatory approval, which may take longer in
                    some jurisdictions. As these self-driving features evolve, your car will be continuously
                    upgraded through over-the-air software updates.
                </Desc>

                <Container>
                    <Container>
                        <BtnBox>
                            <Btn>Add</Btn>
                        </BtnBox>
                    </Container>
                    <Container>
                        <FeatureBox>
                            <Feature>Feature Details</Feature>
                        </FeatureBox>
                    </Container>
                </Container>

                <Title>Order Your Model S</Title>
                <DeliveryTime>Est. Delivery: June</DeliveryTime>
                {/* <Btn>Continue Payment</Btn> */}

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

export default TestDesign

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
    padding: 24px;
    width: 600px;
    border: solid green 4px;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

// Model name/title
const Title = styled.div`
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
    padding: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
    border: solid green 1px;
`

// Container for all the model price boxes
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 20px;
    padding-bottom: 10px;
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


// Outer Container for model details
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    color: #393c41;
    border: solid green 1px;
`

// Inner Container for the model's stats
const Stats = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`

// Model Second detail
const Item = styled.div`
    display: flex;
    color: #393c41;
    border: solid green 1px;
`


const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
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


const DescBox = styled.div`
    display: flex;
    padding: 10px;
    color: #393c41;
    border: solid orange 1px;
    `

// Description
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #393c41;
    border: solid purple 1px;
    p {
        display: flex;
        text-decoration: underline;
        width: 95px;
        border: solid teal 1px;
    }
    @media (max-width: 823px) {
        flex-direction: column;
    }
`


// Choose wheels/paint/ect. options
const Selector = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    border: solid green 1px;
`


const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    border: solid pink 2px;
`

// Button
const Btn = styled.div`
    display: flex;
    background: #0000FF;
    color: #ffffff;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    border: solid green 4px;
`


// Feature Box containing the feature details
const FeatureBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    border: solid red 2px;
`

// Feature details container
const Feature = styled.div`
    display: flex;
    background: #D3D3D3;
    color: #393c41;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
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



