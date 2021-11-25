import styled from 'styled-components'
import { useEffect } from 'react';
// import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../Logo';


const ModelSDesign = () => {
    useEffect(() => {
        console.log('Im Here!!!')
    }, []);

    return (
        <Wrap>
            <Logo />
            <SideBar>
                <Container>
                    <Title>Model S</Title>
                </Container>

                <DeliveryTime>Est. Devilvery: June</DeliveryTime>

                <Container>
                    <Box2>
                        <PriceGroup>
                            <PriceBox>
                                <Item>Purchase Price</Item>
                            </PriceBox>
                            <PriceBox>
                                <Item>Potential Savings*</Item>
                            </PriceBox>
                        </PriceGroup>
                    </Box2>
                </Container>

                <Container>
                    <Box3>
                        <Range>
                            <Stats>375
                                <Stats2>mi</Stats2>
                            </Stats>
                            <Stats3>Range (est.)</Stats3>
                        </Range>
                        <Range>
                            <Stats>155
                                <Stats2>mph</Stats2>
                            </Stats>
                            <Stats3>Top Speed</Stats3>
                        </Range>
                        <Range>
                            <Stats>3.1
                                <Stats2>sec</Stats2>
                            </Stats>
                            <Stats3>0-60mph</Stats3>
                        </Range>
                    </Box3>
                </Container>

                <Container>
                    <Name>Dual Motor All-Wheel Drive</Name>
                    <Box4>
                        <ModelGroup>
                            <ModelBox>
                                <Item>Model S</Item>
                            </ModelBox>
                            <ModelBox>
                                <Item>$89,490*</Item>
                            </ModelBox>
                        </ModelGroup>
                    </Box4>
                </Container>

                <Container>
                    <Name>Tri Motor All-Wheel drivers</Name>
                    <Box4>
                        <ModelGroup>
                            <ModelBox>
                                <Item>Model S Plaid</Item>
                            </ModelBox>
                            <ModelBox>
                                <Item>$124,490*</Item>
                            </ModelBox>
                        </ModelGroup>
                    </Box4>
                </Container>

                <Container>
                    <Box5>
                        <Desc>* Prices above include potential incentives and
                        gas savings of $5,500.</Desc>
                        <Learn>Learn More</Learn>

                    </Box5>
                </Container>

                <Container>
                    <Box>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box>
                </Container>


                <Container>
                    <Box>
                    </Box>
                </Container>

                <Container>
                    <SubTitle>Paint</SubTitle>
                    <Selector></Selector>
                    <Desc>Pearl White Multi-Coat Included</Desc>
                </Container>

                <Container>
                    <SubTitle>Wheels</SubTitle>
                    <Selector></Selector>
                    <Desc>21" Arachnid Wheels</Desc>
                    <Desc>$4,500</Desc>
                    <Desc>Range (est.): 375mi</Desc>
                </Container>

                <Container>
                    <SubTitle>Interior</SubTitle>
                    <Selector></Selector>
                    <Desc>All Black Included</Desc>
                    <Desc>Ebony Décor</Desc>
                </Container>

                <Container>
                    <Box>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box>
                </Container>

                <Container>
                    <SubTitle>Full Self-Driving Capability</SubTitle>
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
    /* width: 100%; */
`

// SideBar Container for the model details
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    overflow-y: scroll;
    padding: 24px;
    padding-top: 63px;
    width: 425px;
    @media (max-width: 823px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

// Model name/title
const Title = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 25px;
    font-size: 40px;
`

const SubTitle = styled(Title)`
    font-size: 25px;
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
`

// 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`

// 
const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`


const Box2 = styled(Box)`
    flex-direction: row;
    padding: 20px;
`


const PriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`


const Box3 = styled(Box)`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px;
`

const Range = styled(Box)`
    display: flex;
    flex-direction: column;
`

const Box4 = styled(Box)`
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`

const ModelBox = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

const Box5 = styled(Box)`
    flex-direction: column;
    padding: 32px;
`

// 
const Stats = styled.div`
    display: flex;
    justify-content: center;
    color: #393c41;
`

// 
const Stats2 = styled(Stats)`
`

// 
const Stats3 = styled(Stats)`
`

// 
const BtnGroup = styled.div`
    display: flex;
    padding: 10px;
    /* padding-left: 30px;
    padding-right: 30px; */
`

// 
const PriceGroup = styled(BtnGroup)`
    flex-direction: row;
    justify-content: space-between;
    width: 376px;
    padding: 15px;
    border-radius: 100px;
    border: solid black 1px;
`

// 
const ModelGroup = styled(BtnGroup)`
    flex-direction: row;
    justify-content: space-between;
    width: 413px;
    padding: 20px;
    border-radius: 100px;
    border: solid black 1px;
`

// 
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
`

// 
const Item = styled.div`
    display: flex;
`


// Name of the either Dual or Tri motor
const Name = styled.div`
    display: flex;
    justify-content: flex-start;
`

// Description
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: #393c41;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

const Learn = styled(Desc)`
    text-decoration: underline;
    font-size: 15px;
    cursor: pointer;
`

// Choose wheels/paint/ect. options
const Selector = styled.div`
    display: flex;
    justify-content: center;
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
    justify-content: center;
    background: #D3D3D3;
    color: #393c41;
    border-radius: 100px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px;
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
    border: solid black 1px;
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