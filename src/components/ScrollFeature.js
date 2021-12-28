import styled from 'styled-components/macro'
import Switch from './Switch';
import { useEffect, useState } from 'react';



const ScrollFeature = () => {
    // useEffect(() => {
    //     console.log('Im Here!!!')
    // }, []);

    const [value, setValue] = useState(false)

    const handleClick = () => {
        console.log('You Clicked Here!!!!')
    }

    return (
        <ContainerFixed>
            <SideBar>
                <Wrap>
                    <Box1>
                        <Title>Model S</Title>
                    </Box1>
                </Wrap>

                <DeliveryTime>
                    Est. Devilvery: November 2022
                </DeliveryTime>

                <Wrap>
                    <Box2>
                        <PriceGroup>
                            <PriceBox>
                                <ItemBtn onClick={handleClick}>
                                    Purchase Price
                                    {/* <Switch 
                                        onColor="#fff"
                                        isOn={value}
                                        handleToggle={() => setValue(!value)}
                                    /> */}
                                </ItemBtn>
                            </PriceBox>
                            <PriceBox>
                                <ItemBtn onClick={handleClick}>
                                    Potential Savings*
                                    {/* <Switch
                                        onColor="#fff"
                                        isOn={value}
                                        handleToggle={() => setValue(!value)}
                                    /> */}
                                </ItemBtn>
                            </PriceBox>
                        </PriceGroup>
                    </Box2>
                </Wrap>

                <Wrap>
                    <Box3>
                        <Range>
                            <Stats>
                                <Stats1>
                                    405
                                </Stats1>
                                <Stats2>
                                    mi
                                </Stats2>
                            </Stats>
                            <Stats3>
                                Range (EPA est.)
                            </Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>
                                    155
                                </Stats1>
                                <Stats2>
                                    mph
                                </Stats2>
                            </Stats>
                            <Stats3>Top Speed</Stats3>
                        </Range>
                        <Range>
                            <Stats>
                                <Stats1>
                                    3.1
                                </Stats1>
                                <Stats2>
                                    sec
                                </Stats2>
                            </Stats>
                            <Stats3>
                                0-60 mph
                            </Stats3>
                        </Range>
                    </Box3>
                </Wrap>

                <Wrap>
                    <Name>Dual Motor All-Wheel Drive</Name>
                    <Box4>
                        {/* <ModelGroup onClick={() => setModelStatus(true)}> */}
                        <ModelGroup onClick={handleClick}>
                            <ModelBox>
                                <ItemSelect>
                                    Model S
                                </ItemSelect>
                            </ModelBox>
                            <ModelBox>
                                <Item>
                                    $89,490*
                                </Item>
                            </ModelBox>
                        </ModelGroup>
                    </Box4>
                </Wrap>

                <Wrap>
                    <Name>Tri Motor All-Wheel drivers</Name>
                    <Box4>
                        <ModelGroup onClick={handleClick}>
                            <ModelBox>
                                <ItemSelect>
                                    Model S Plaid
                                </ItemSelect>
                            </ModelBox>
                            <ModelBox>
                                <Item>
                                    $124,490*
                                </Item>
                            </ModelBox>
                        </ModelGroup>
                    </Box4>
                </Wrap>

                <Wrap>
                    <Box5>
                        <Text>
                            * Prices above include potential
                            incentives and gas savings of $5,500.
                            <p>Learn More</p>
                        </Text>
                    </Box5>
                </Wrap>

                <Wrap>
                    <Box>
                        <BtnGroup>
                            <Feature onClick={handleClick}>
                                Feature Details
                            </Feature>
                        </BtnGroup>
                    </Box>
                </Wrap>

                <Wrap>
                    <EmptyBox>
                    </EmptyBox>
                </Wrap>

                <Wrap>
                    <Box1>
                        <SubTitle>Paint</SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>
                                <CustomBtn1 onClick={handleClick}></CustomBtn1>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn2 onClick={handleClick}></CustomBtn2>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn3 onClick={handleClick}></CustomBtn3>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn4 onClick={handleClick}></CustomBtn4>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn5 onClick={handleClick}></CustomBtn5>
                            </SelectorImg>
                        </Selector>
                    </Box>
                    <DescBox>
                        <MiniBox>
                            <DescText>
                                Pearl White Multi-Coat
                            </DescText>
                        </MiniBox>
                        <MiniBox>
                            <Desc>Included</Desc>
                        </MiniBox>
                    </DescBox>
                </Wrap>

                <Wrap>
                    <EmptyBox>
                    </EmptyBox>
                </Wrap>

                <Wrap>
                    <Box1>
                        <SubTitle>
                            Wheels
                        </SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>
                                <CustomBtn6 onClick={handleClick}></CustomBtn6>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn7 onClick={handleClick}></CustomBtn7>
                            </SelectorImg>
                        </Selector>
                    </Box>
                    <DescBox>
                        <MiniBox>
                            <DescText>19" Tempest Wheels</DescText>
                        </MiniBox>
                        <MiniBox>
                            <Desc>Included</Desc>
                        </MiniBox>
                    </DescBox>
                    <Desc>
                        Range (EPA est.) : 405mi
                    </Desc>
                </Wrap>

                <Wrap>
                    <EmptyBox>
                    </EmptyBox>
                </Wrap>

                <Wrap>
                    <Box1>
                        <SubTitle>Interior</SubTitle>
                    </Box1>
                    <Box>
                        <Selector>
                            <SelectorImg>
                                <CustomBtn8 onClick={handleClick}></CustomBtn8>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn9 onClick={handleClick}></CustomBtn9>
                            </SelectorImg>
                            <SelectorImg>
                                <CustomBtn10 onClick={handleClick}></CustomBtn10>
                            </SelectorImg>
                        </Selector>
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
                </Wrap>

                <Wrap>
                    <Box>
                        <BtnGroup>
                            <Feature>
                                Feature Details
                            </Feature>
                        </BtnGroup>
                    </Box>
                </Wrap>

                <Wrap>
                    <EmptyBox>
                    </EmptyBox>
                </Wrap>

                <Wrap>
                    <Box1>
                        <SubTitle>
                            Full Self-Driving Capability
                        </SubTitle>
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
                </Wrap>

                <Wrap>
                    <Box6>
                        <BtnBox>
                            <Btn>Add</Btn>
                        </BtnBox>
                        <BtnGroup>
                            <Feature>
                                Feature Details
                            </Feature>
                        </BtnGroup>
                    </Box6>
                </Wrap>

                <Wrap>
                    <EmptyBox>
                    </EmptyBox>
                </Wrap>

                <Wrap>
                    <BottomTitle>Order Your Model S</BottomTitle>
                    <DeliveryTime>Est. Delivery: June 2022</DeliveryTime>
                    <BtnGroup2>
                        <Btn2>Continue Payment</Btn2>
                    </BtnGroup2>
                </Wrap>

                <Wrap>
                    <LastEmptyBox>
                    </LastEmptyBox>
                </Wrap>

            </SideBar>
        </ContainerFixed>
    )
}



const ContainerFixed = styled.div`    
    width: 350px; 
    z-index: 1;    
`


const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    overflow-y: scroll;
    height: 92vh;    
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 64px;
    font-size: 50px;
`

const SubTitle = styled(Title)`
    font-size: 35px;
    padding: 10px;
    text-align: center;
`

const BottomTitle = styled(Title)`
    font-size: 35px;
`


const DeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 10px;
    color: #767973;
`

// 
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`


const Box = styled.div`
    display: flex;
    justify-content: center;
`


const EmptyBox = styled(Box)`
    padding-bottom: 176px;
`

const LastEmptyBox = styled(EmptyBox)`
    padding-bottom: 343px;
`

const Box1 = styled(Box)`
    padding: 5px;
`

const Box2 = styled(Box)`
    padding: 9px;
`

const PriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
`

const Box3 = styled(Box)`
    justify-content: space-evenly;
    padding: 20px;
`

const Range = styled(Box)`
    display: flex;
    flex-direction: column;
`

const Box4 = styled(Box)`
    justify-content: center;
    padding: 20px;
`

const ModelBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const Box5 = styled(Box)`
    padding: 5px;
`

const Box6 = styled(Box)`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`


const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: #393c41;
`


const Stats1 = styled(Stats)`
    font-size: 27px;
    padding-bottom: 15px;
    font-weight: 550;
`


const Stats2 = styled(Stats)`
    font-weight: 550;
`


const Stats3 = styled(Stats)`
    font-size: 12px;
    font-weight: 500;
    color: #90938C;
`


const BtnGroup = styled.div`
    display: flex;
    padding: 6px;
`

const BtnGroup2 = styled(BtnGroup)`
   justify-content: center;
`


const PriceGroup = styled(BtnGroup)`
    flex-direction: row;
    justify-content: space-between;
    width: 316px;
    /* padding: 15px; */
    border-radius: 100px;
    border: solid black 1px;
    background: #dfdfdf;
`


const ModelGroup = styled(BtnGroup)`
    flex-direction: row;
    justify-content: space-between;
    width: 413px;
    padding: 20px;
    border-radius: 100px;
    border: solid black 1px;
    cursor: pointer;
`


const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
`


const ItemBtn = styled.div`
    display: flex;
    background: #ffffff;
    border-radius: 100px;
    height: 23px;
    width: 145px;
    cursor: pointer;
`

const ItemSelect = styled(ItemBtn)`
    
`

const Item = styled.div`
    display: flex;
`


// Name of the either Dual or Tri motor
const Name = styled.div`
    display: flex;
    justify-content: flex-start;
`


const Desc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: #90938C ;
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


const Text = styled(Desc)`
    flex-direction: row;
    font-size: 11px;
    text-align: start;
    p {
        cursor: pointer;
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
    padding: 8px;
    
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


const CustomBtn1 = styled.div`
    display: flex;
    padding-top: 2px;
    cursor: pointer;
    color: #393c41;
    border-radius: 50px;
    border: 1px solid;
    background: white;
    padding: 20px;
`

const CustomBtn2 = styled(CustomBtn1)`
    background: black;
`

const CustomBtn3 = styled(CustomBtn1)`
    background: silver;
`

const CustomBtn4 = styled(CustomBtn1)`
    background: blue;
`

const CustomBtn5 = styled(CustomBtn1)`
    background: red;
`

const CustomBtn6 = styled(CustomBtn1)`
    background: gray;
`

const CustomBtn7 = styled(CustomBtn1)`
    background: gray;
`

const CustomBtn8 = styled(CustomBtn1)`
    background: grey;
`

const CustomBtn9 = styled(CustomBtn1)`
    background: silver;
`

const CustomBtn10 = styled(CustomBtn1)`
    background: tan;
`

export default ScrollFeature
