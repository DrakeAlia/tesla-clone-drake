// import styled from 'styled-components'
// import { useEffect } from 'react';
// // import { useState } from 'react';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import Logo from '../Logo';


// const ModelSDesign = () => {
//     useEffect(() => {
//         console.log('im here')
//     }, []);

//     // const [details, setDestails] = useState(null)
//     // const [price, setPrice] = useState(null)
//     // const [allWheelDrive, setAllWheelDrive] = useState(null)
//     // const [paint, setPaint] = useState(null)
//     // const [wheels, setWheels] = useState(null)
//     // const [interior, setInterior] = useState(null)

//     return (
//         <Wrap>
//             <Logo />
//             <SideBar>
//                 <ModelTitle>Model S</ModelTitle>
//                 <DeliveryTime>Est. Devilvery: June</DeliveryTime>

//                 <ModelPriceContainer>
//                     <ModelPriceTab>
//                         <ModelPrice>Purchase Price</ModelPrice>
//                         <ModelPrice>Potential Savings*</ModelPrice>
//                     </ModelPriceTab>
//                 </ModelPriceContainer>

//                 <ModelDetailsBox>
//                     <ModelDetails>
//                         <ModelStats>375mi</ModelStats>
//                         <ModelDetailsItem>Range (est.)</ModelDetailsItem>
//                     </ModelDetails>
//                     <ModelDetails>
//                         <ModelStats>155mph</ModelStats>
//                         <ModelDetailsItem>Top Speed</ModelDetailsItem>
//                     </ModelDetails>
//                     <ModelDetails>
//                         <ModelStats>3.1sec</ModelStats>
//                         <ModelDetailsItem>0-60mph</ModelDetailsItem>
//                     </ModelDetails>
//                 </ModelDetailsBox>

//                 <MotorContainer>
//                     <MotorInnerContainer>
//                         <MotorName>Dual Motor All-Wheel Drive</MotorName>
//                         <MotorBox>
//                             <MotorItem>Model S</MotorItem>
//                             <MotorItem>$89,490*</MotorItem>
//                         </MotorBox>
//                     </MotorInnerContainer>
//                 </MotorContainer>

//                 <MotorContainer>
//                     <MotorInnerContainer>
//                         <MotorName>Tri Motor All-Wheel drivers</MotorName>
//                         <MotorBox>
//                             <MotorItem>Model S Plaid</MotorItem>
//                             <MotorItem>$124,490*</MotorItem>
//                         </MotorBox>
//                     </MotorInnerContainer>
//                 </MotorContainer>

//                 <DescContainer>
//                     <DescBox>
//                         <Desc>The Prices above include potential incentives and gas
//                             savings of $5,500.
//                             <p>Learn More</p></Desc>
//                     </DescBox>
//                 </DescContainer>

//                 <FeatureContainer>
//                     <FeatureBox>
//                         <Feature>Feature Details</Feature>
//                     </FeatureBox>
//                 </FeatureContainer>

//                 <SubTitle>Paint</SubTitle>
//                 <SubSelector></SubSelector>
//                 <SubSelectorDesc>Pearl White Multi-Coat Included</SubSelectorDesc>

//                 <SubTitle>Wheels</SubTitle>
//                 <SubSelector></SubSelector>
//                 <SubSelectorDesc>21" Arachnid Wheels</SubSelectorDesc>
//                 <SubSelectorDesc>$4,500</SubSelectorDesc>
//                 <SubSelectorDesc>Range (est.): 375mi</SubSelectorDesc>

//                 <SubTitle>Interior</SubTitle>
//                 <SubSelector></SubSelector>
//                 <SubSelectorDesc>All Black Included</SubSelectorDesc>
//                 <SubSelectorDesc>Ebony Décor</SubSelectorDesc>

//                 <FeatureContainer>
//                     <FeatureBox>
//                         <Feature>Feature Details</Feature>
//                     </FeatureBox>
//                 </FeatureContainer>

//                 <SubTitle>Full Self-Driving Capability</SubTitle>
//                 <SubSelectorDesc>$10,000</SubSelectorDesc>
//                 <SubDetails>
//                     <SubDetailsItem>Navigate on Autopilot</SubDetailsItem>
//                     <SubDetailsItem>Auto Lane Change</SubDetailsItem>
//                     <SubDetailsItem>Autopark</SubDetailsItem>
//                     <SubDetailsItem>Summon</SubDetailsItem>
//                     <SubDetailsItem>Full Self-Driving Computer</SubDetailsItem>
//                     <SubDetailsItem>Traffic Light and Stop Sign Control</SubDetailsItem>

//                     <li>Navigate on Autopilot</li>
//                     <li>Auto Lane Change</li>
//                     <li>Autopark</li>
//                     <li>Summon</li>
//                     <li>Full Self-Driving Computer</li>
//                     <li>Traffic Light and Stop Sign Control</li>

//                     <SubSelectorDesc1>Coming Soon</SubSelectorDesc1>
//                     <SubDetailsItem>Autosteer on city streets</SubDetailsItem>
//                     <li>Autosteer on city streets</li>
//                 </SubDetails>
//                 <SubSelectorP>The currently enabled features require active driver
//                     supervision and do not make the vehicle autonomous. The activation and use of these features
//                     are dependent on achieving reliability far in excess of human drivers as demonstrated by
//                     billions of miles of experience, as well as regulatory approval, which may take longer in
//                     some jurisdictions. As these self-driving features evolve, your car will be continuously
//                     upgraded through over-the-air software updates.
//                 </SubSelectorP>

//                 <LowerContainer>
//                     <BtnContainer>
//                         <BtnBox>
//                             <Btn>Add</Btn>
//                         </BtnBox>
//                     </BtnContainer>
//                     <FeatureContainer>
//                         <FeatureBox>
//                             <Feature>Feature Details</Feature>
//                         </FeatureBox>
//                     </FeatureContainer>
//                 </LowerContainer>

//                 <SubTitle>Order Your Model S</SubTitle>
//                 <DeliveryTime>Est. Delivery: June</DeliveryTime>
//                 {/* <Btn>Continue Payment</Btn> */}

//             </SideBar>
//             <Footer>
//                 <FooterBox>
//                     <FooterBtn>
//                         <ExpandLessIcon></ExpandLessIcon>
//                         {/* <UpArrow src="/images/Up-Arrow.svg" /> */}
//                     </FooterBtn>
//                     <FooterItem>$100,990 Purchase price</FooterItem>
//                     <FooterItem>$95,490 After potential savings</FooterItem>
//                 </FooterBox>
//             </Footer>
//         </Wrap>
//     )
// }

// export default ModelSDesign

// // Container for the whole page
// const Wrap = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     /* width: 100vw;
//     height: 100vh; */
//     border-color: solid azure 1px;
// `

// // Widget Container for the model details
// const SideBar = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-self: flex-end;
//     overflow-y: scroll;
//     padding: 24px;
//     width: 600px;
//     border: solid green 4px;
//     @media (max-width: 823px) {
//         flex-direction: column;
//     }
// `

// // Model name/title
// const ModelTitle = styled.div`
//     display: flex;
//     justify-content: center;
//     padding-top: 25px;
//     font-size: 40px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Est. Devilvery: June
// const DeliveryTime = styled.div`
//     display: flex;
//     justify-content: center;
//     color: #393c41;
//     padding: 24px;
//     padding-top: 5px;
//     padding-bottom: 10px;
//     border: solid green 1px;
// `

// // Container for all the model price boxes
// const ModelPriceContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-content: center;
//     padding: 20px;
//     padding-bottom: 10px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Model Price/Savings container
// const ModelPriceTab = styled.div`
//     display: flex;
//     justify-content: space-between;
//     padding: 10px;
//     border-radius: 100px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Model Price/Savings
// const ModelPrice = styled.div`
//     display: flex;
//     cursor: pointer;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Model detail container
// const ModelDetailsBox = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Outer Container for model details
// const ModelDetails = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     padding: 24px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Inner Container for the model's stats
// const ModelStats = styled.div`
//     display: flex;
//     justify-content: center;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Model Second detail
// const ModelDetailsItem = styled.div`
//     display: flex;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Container for the Motor section
// const MotorContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 24px;
//     border: solid green 1px;
// `

// const MotorInnerContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding-left: 30px;
//     padding-right: 30px;
// `

// // Name of the either Dual or Tri motor
// const MotorName = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Container for the model and price for motor button
// const MotorBox = styled.div`
//     display: flex;
//     justify-content: space-between;
//     padding: 10px;
//     border-radius: 100px;
//     color: #393c41;
//     border: solid green 1px;

// `

// // Either model name or price 
// const MotorItem = styled.div`
//     display: flex;
//     justify-content: space-between;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Container for Description
// const DescContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 20px;
//     color: #393c41;
//     border: solid red 1px;
//     `

// const DescBox = styled.div`
//     display: flex;
//     padding: 10px;
//     color: #393c41;
//     border: solid orange 1px;
//     `

// // Description
// const Desc = styled.div`
//     display: flex;
//     flex-direction: column;
//     font-size: 15px;
//     color: #393c41;
//     border: solid purple 1px;
//     p {
//         display: flex;
//         text-decoration: underline;
//         width: 95px;
//         border: solid teal 1px;
//     }
//     @media (max-width: 823px) {
//         flex-direction: column;
//     }
// `

// // The Sub title of the models
// const SubTitle = styled.div`
//     display: flex;
//     justify-content: center;
//     font-weight: 400;
//     font-size: 25px;
//     padding-top: 30px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Choose wheels/paint/ect. options
// const SubSelector = styled.div`
//     display: flex;
//     justify-content: center;
//     color: #393c41;
//     border: solid green 1px;
// `

// // 
// const SubSelectorDesc = styled.div`
//     display: flex;
//     justify-content: center;
//     font-weight: 400;
//     padding-top: 10px;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Sub title description
// const SubSelectorDesc1 = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Sub title secondary details container
// const SubDetails = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     color: #393c41;
//     border: solid green 1px;
//     li {
//         /* display: flex; */
//     }
// `

// // Sub title secondary details
// const SubDetailsItem = styled.div`
//     display: flex;
//     align-items: flex-start;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Sub title paragraph
// const SubSelectorP = styled.div`
//     display: flex;
//     align-content: flex-start;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Buttons container
// const BtnContainer = styled.div`
//    display: flex;
//    justify-content: center;
//    border: solid green 5px;
// `

// const BtnBox = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 24px;
//     border: solid pink 2px;
// `

// // Button
// const Btn = styled.div`
//     display: flex;
//     background: #0000FF;
//     color: #ffffff;
//     text-transform: uppercase;
//     padding: 10px;
//     border-radius: 100px;
//     cursor: pointer;
//     border: solid green 4px;
// `

// // Feature container
// const FeatureContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     border: solid teal 5px;
// `

// // Feature Box containing the feature details
// const FeatureBox = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 24px;
//     border: solid red 2px;
// `

// // Feature details container
// const Feature = styled.div`
//     display: flex;
//     background: #D3D3D3;
//     color: #393c41;
//     text-transform: uppercase;
//     padding: 10px;
//     border-radius: 100px;
//     cursor: pointer;
//     border: solid yellow 4px;
// `

// // 
// const LowerContainer = styled.div`
//     display: flex;
//     justify-content: space-evenly;
// `

// // Bottom container 
// const Footer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     padding-top: 2px;
//     border: solid green 1px;
//     @media (max-width: 800px) {
//         flex-direction: row;
//     }
// `

// // Bottom container 
// const FooterBox = styled.div`
//     display: flex;
//     justify-content: center;
//     border: solid green 1px;
// `

// // Footer button arrow
// const FooterBtn = styled.div`
//     display: flex;
//     padding-top: 2px;
//     padding: 10px;
//     cursor: pointer;
//     color: #393c41;
//     border: solid green 1px;
// `

// // Footer items in container
// const FooterItem = styled.div`
//     padding-top: 2px;
//     padding: 10px;
//     cursor: pointer;
//     color: #393c41;
//     border: solid green 1px;
// `

// const UpArrow = styled.img`
//     height: 45px;
//     animation: animateDown infinite 2.5s;
//     overflow-x: hidden;
// `


import styled from 'styled-components'
import { useEffect } from 'react';
// import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../Logo';


const ModelSDesign = () => {
    useEffect(() => {
        console.log('Im Here!!!')
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
            <SideBar>
                <Container>
                    <Title>Model S</Title>
                </Container>

                <DeliveryTime>Est. Devilvery: June</DeliveryTime>

                <Container>
                    <Box>
                        <BtnGroup>
                            <Item>Purchase Price</Item>
                            <Item>Potential Savings*</Item>
                        </BtnGroup>
                    </Box>
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
                    <Name>Dual Motor All-Wheel Drive</Name>
                    <Box>
                        <BtnGroup>
                            <Item>Model S</Item>
                            <Item>$89,490*</Item>
                        </BtnGroup>
                    </Box>
                </Container>

                <Container>
                    <Name>Tri Motor All-Wheel drivers</Name>
                    <Box>
                        <BtnGroup>
                            <Item>Model S Plaid</Item>
                            <Item>$124,490*</Item>
                        </BtnGroup>
                    </Box>
                </Container>

                <Container>
                    <Box>
                        <Desc>The Prices above include potential incentives
                            and gas savings of $5,500.
                            <p>Learn More</p></Desc>
                    </Box>
                </Container>

                <Container>
                    <Box>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box>
                </Container>



                <Container>
                    <Title>Paint</Title>
                    <Selector></Selector>
                    <Desc>Pearl White Multi-Coat Included</Desc>
                </Container>

                <Container>
                    <Title>Wheels</Title>
                    <Selector></Selector>
                    <Desc>21" Arachnid Wheels</Desc>
                    <Desc>$4,500</Desc>
                    <Desc>Range (est.): 375mi</Desc>
                </Container>

                <Container>
                    <Title>Interior</Title>
                    <Selector></Selector>
                    <Desc>All Black Included</Desc>
                    <Desc>Ebony Décor</Desc>
                </Container>

                <Container>
                    <Box>
                        <Feature>Feature Details</Feature>
                    </Box>
                </Container>

                <Container>
                    <Title>Full Self-Driving Capability</Title>
                    <Desc>$10,000</Desc>
                    <Details>

                        <li>Navigate on Autopilot</li>
                        <li>Auto Lane Change</li>
                        <li>Autopark</li>
                        <li>Summon</li>
                        <li>Full Self-Driving Computer</li>
                        <li>Traffic Light and Stop Sign Control</li>

                        <Desc>Coming Soon</Desc>
                        <li>Autosteer on city streets</li>
                    </Details>
                    <Desc>The currently enabled features require active driver
                        supervision and do not make the vehicle autonomous. The activation and use of these features
                        are dependent on achieving reliability far in excess of human drivers as demonstrated by
                        billions of miles of experience, as well as regulatory approval, which may take longer in
                        some jurisdictions. As these self-driving features evolve, your car will be continuously
                        upgraded through over-the-air software updates.
                    </Desc>
                </Container>

                <Container>
                    <Box>
                        <BtnBox>
                            <Btn>Add</Btn>
                        </BtnBox>
                    </Box>
                    <Box>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box>
                </Container>

                <Container>
                    <Title>Order Your Model S</Title>
                    <DeliveryTime>Est. Delivery: June</DeliveryTime>
                    <BtnBox>
                        <Btn>Continue Payment</Btn>
                    </BtnBox>
                </Container>

            </SideBar>

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
`

// SideBar Container for the model details
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    overflow-y: scroll;
    padding: 24px;
    width: 600px;
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
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
    padding: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
`

// 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 20px;
    padding-bottom: 10px;
    color: #393c41;
`

// 
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 20px;
    padding-bottom: 10px;
    color: #393c41;
    `

// 
const BtnGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
`

// 
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    color: #393c41;
`

// 
const Stats = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
`

// 
const Item = styled.div`
    display: flex;
    color: #393c41;
`


// Name of the either Dual or Tri motor
const Name = styled.div`
    display: flex;
    justify-content: flex-start;
    color: #393c41;
`

// Description
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: #393c41;
    p {
        display: flex;
        text-decoration: underline; 
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
`

// 
const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
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
`


// Bottom container 
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 2px;
    @media (max-width: 800px) {
        flex-direction: row;
    }
`

// Bottom container 
const FooterBox = styled.div`
    display: flex;
    justify-content: center;
`

// Footer button arrow
const FooterBtn = styled.div`
    display: flex;
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
`

// const UpArrow = styled.img`
//     height: 45px;
//     animation: animateDown infinite 2.5s;
//     overflow-x: hidden;
// `