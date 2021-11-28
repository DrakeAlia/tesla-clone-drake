import styled from 'styled-components'
import { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../Logo';


const ModelSDesign = () => {
    useEffect(() => {
        console.log('Im Here!!!')
    }, []);

    const [modelStatus, setModelStatus] = useState(false)

    return (
        <Wrap>
            <Logo />
            <SideBar>
                <Container>
                    <Box1>
                        <Title>Model S</Title>
                    </Box1>
                </Container>

                <DeliveryTime>Est. Devilvery: June 2022</DeliveryTime>

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
                            <Stats>
                                <Stats1>375</Stats1>
                                <Stats2>mi</Stats2>
                            </Stats>
                            <Stats3>Range (est.)</Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>155</Stats1>
                                <Stats2>mph</Stats2>
                            </Stats>
                            <Stats3>Top Speed</Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>3.1</Stats1>
                                <Stats2>sec</Stats2>
                            </Stats>
                            <Stats3>0-60 mph</Stats3>
                        </Range>
                    </Box3>
                </Container>

                {/* <Container>
                    <Box3>
                        <Range>
                            <Stats>
                                <Stats1>348</Stats1>
                                <Stats2>mi</Stats2>
                            </Stats>
                            <Stats3>Range (EPA est.)</Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>200</Stats1>
                                <Stats2>mph</Stats2>
                            </Stats>
                            <Stats3>Top Speed</Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>1.99</Stats1>
                                <Stats2>sec</Stats2>
                            </Stats>
                            <Stats3>0-60 mph</Stats3>
                        </Range>
                    </Box3>
                </Container> */}

                <Container>
                    <Name>Dual Motor All-Wheel Drive</Name>
                    <Box4>
                        {/* <ModelGroup onClick={() => setModelStatus(true)}> */}
                        <ModelGroup onClick={() => setModelStatus(true)}>
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
                        <ModelGroup onClick={() => setModelStatus(true)}>
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
                        <Text>* Prices above include potential incentives and
                            gas savings of $5,500.
                            <p>Learn More</p>
                        </Text>
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
                    <EmptyBox>
                    </EmptyBox>
                </Container>

                <Container>
                    <Box1>
                        <SubTitle>Paint</SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            This is Where Images Will Go</Selector>
                    </Box>
                    <DescBox>
                        <MiniBox>
                            <DescText>Pearl White Multi-Coat</DescText>
                        </MiniBox>
                        <MiniBox>
                            <Desc>Included</Desc>
                        </MiniBox>
                    </DescBox>
                </Container>

                <Container>
                    <EmptyBox>
                    </EmptyBox>
                </Container>

                <Container>
                    <Box1>
                        <SubTitle>Wheels</SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            This is Where Images Will Go</Selector>
                    </Box>
                    <DescBox>
                        <MiniBox>
                            <DescText>21" Arachnid Wheels</DescText>
                        </MiniBox>
                        <MiniBox>
                            <Desc>$4,500</Desc>
                        </MiniBox>
                    </DescBox>
                    <Desc>Range (est.): 375mi</Desc>
                </Container>

                <Container>
                    <EmptyBox>
                    </EmptyBox>
                </Container>

                <Container>
                    <Box1>
                        <SubTitle>Interior</SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            <SelectorImg>*</SelectorImg>
                            This is Where Images Will Go</Selector>
                    </Box>
                    <DescBox>
                        <MiniBox>
                            <DescText>All Black</DescText>
                        </MiniBox>
                        <MiniBox>
                            <Desc>Included</Desc>
                        </MiniBox>
                    </DescBox>
                    <MiniBox>
                        <Desc>Ebony Décor</Desc>
                    </MiniBox>
                </Container>

                <Container>
                    <Box>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box>
                </Container>

                <Container>
                    <EmptyBox>
                    </EmptyBox>
                </Container>

                <Container>
                    <Box1>
                        <SubTitle>Full Self-Driving Capability</SubTitle>
                    </Box1>
                    <Desc1>$10,000</Desc1>
                    <Details>
                        <li>Navigate on Autopilot</li>
                        <li>Auto Lane Change</li>
                        <li>Autopark</li>
                        <li>Summon</li>
                        <li>Full Self-Driving Computer</li>
                        <li>Traffic Light and Stop Sign Control</li>
                        <TextBox>
                            <Text1>Coming Soon</Text1>
                        </TextBox>
                        <li>Autosteer on city streets</li>
                    </Details>
                    <TextBox>
                        <Text>The currently enabled features require active driver
                            supervision and do not make the vehicle autonomous. The activation and use of these features
                            are dependent on achieving reliability far in excess of human drivers as demonstrated by
                            billions of miles of experience, as well as regulatory approval, which may take longer in
                            some jurisdictions. As these self-driving features evolve, your car will be continuously
                            upgraded through over-the-air software updates.
                        </Text>
                    </TextBox>
                </Container>

                <Container>
                    <Box6>
                        <BtnBox>
                            <Btn>Add</Btn>
                        </BtnBox>
                        <BtnGroup>
                            <Feature>Feature Details</Feature>
                        </BtnGroup>
                    </Box6>
                </Container>

                <Container>
                    <EmptyBox>
                    </EmptyBox>
                </Container>

                <Container>
                    <BottomTitle>Order Your Model S</BottomTitle>
                    <DeliveryTime>Est. Delivery: June</DeliveryTime>
                    <BtnGroup2>
                        <Btn2>Continue Payment</Btn2>
                    </BtnGroup2>
                </Container>

                <Container>
                    <EmptyBox>
                    </EmptyBox>
                </Container>

            </SideBar>


            <Footer>
                <FooterContainer>
                    <FooterBox>
                        <FooterBtn>
                            <ExpandLessIcon></ExpandLessIcon>
                        </FooterBtn>
                        <FooterItem>$100,990 Purchase price</FooterItem>
                        <FooterItem>$95,490 After potential savings</FooterItem>
                    </FooterBox>
                </FooterContainer>
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
    padding-top: 100px;
    width: 393px;
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
    padding-top: 5px;
    font-size: 50px;
`

const SubTitle = styled(Title)`
    font-size: 35px;
    padding: 30px;
    text-align: center;
`

const BottomTitle = styled(Title)`
    font-size: 35px;
`

// Est. Devilvery: June
const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
    color: #767973;
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

// 
const EmptyBox = styled(Box)`
    padding: 105px;
`

const Box1 = styled(Box)`
    flex-direction: row;
    justify-content: center;
`


const Box2 = styled(Box)`
    flex-direction: row;
    padding: 9px;
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
`

const Box5 = styled(Box)`
    flex-direction: row;
    padding: 5px;
`

const Box6 = styled(Box)`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`

// 
const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: #393c41;
`

// 
const Stats1 = styled(Stats)`
    font-size: 27px;
    padding-bottom: 15px;
    font-weight: 550;
`

// 
const Stats2 = styled(Stats)`
    font-weight: 550;
`

// 
const Stats3 = styled(Stats)`
    font-weight: 500;
    color: #90938C;
`

// 
const BtnGroup = styled.div`
    display: flex;
    padding: 6px;
    /* padding-left: 30px;
    padding-right: 30px; */
`

const BtnGroup2 = styled(BtnGroup)`
   justify-content: center;
`

// 
const PriceGroup = styled(BtnGroup)`
    flex-direction: row;
    justify-content: space-between;
    width: 310px;
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
    cursor: pointer;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: #90938C ;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

const DescText = styled(Desc)`
    color: black;
    font-size: 20px;
`

const DescBox = styled.div`
    display: flex;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
`

const Desc1 = styled(Desc)`
    color: #000000;
    font-size: 20px;
`

// const Desc2 = styled(Desc)`
//     justify-content: flex-start;
// `

// Description
const Text = styled(Desc)`
    flex-direction: row;
    font-size: 15px;
    text-align: start;
    p {
        cursor: pointer;
        text-decoration: underline;
    }
`

const Text1 = styled(Text)`
`

const TextBox = styled.div`
    display: flex;
    padding-bottom: 20px;
    padding-top: 20px;
    flex-direction: row;
`

// Choose wheels/paint/ect. options
const Selector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
`

const SelectorImg = styled(Selector)`
   
`

// 
const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 3px;
`

const MiniBox = styled.div`
    display: flex;
    padding: 5px;
    justify-content: center;
`

// Button
const Btn = styled.div`
    display: flex;
    justify-content: center;
    background: #1E73DB;
    color: #ffffff;
    text-transform: uppercase;
    width: 162px;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
`

const Btn2 = styled(Btn)`
    width: 310px;
`

// Feature details container
const Feature = styled.div`
    display: flex;
    justify-content: center;
    background: #D3D3D3;
    color: #393c41;
    border-radius: 100px;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 7px;
    width: 156px;
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

const FooterContainer = styled(Footer)`
`

// Bottom container 
const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid black 1px;
    border-radius: 100px;
    width: 500px;
    background: #F7F9FC;
`

// Footer button arrow
const FooterBtn = styled.div`
    display: flex;
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
    border-radius: 50px;
    background: #ffffff
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
`
