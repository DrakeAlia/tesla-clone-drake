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
        <WidgetTitle>Model S</WidgetTitle>
        <DeliveryTime>Est. Devilvery: June</DeliveryTime>
        <WidgetPriceTab>
            <WidgetPrice>Purchase Price</WidgetPrice>
            <WidgetSavings>Potential Savings*</WidgetSavings>
        </WidgetPriceTab>
        <WidgetCarDetails>
            <DetailsItem>
            375mi
            <DetailsSubItem>Range (est.)</DetailsSubItem>
            </DetailsItem>
            <DetailsItem>
            155mph
            <DetailsSubItem>Top Speed</DetailsSubItem>
            </DetailsItem>
            <DetailsItem>
            3.1sec
            <DetailsSubItem>0-60 mph</DetailsSubItem>
            </DetailsItem>
        </WidgetCarDetails>
        <DualMotor> Dual Motor All-Wheel Drive
            <DualMotorBtn>Model S</DualMotorBtn>
            <DualMotorBtn>$89,490*</DualMotorBtn>
        </DualMotor>
        <TriMotor> Tri Motor All-Wheel Drive
            <TriMotorBtn>Model S Plaid</TriMotorBtn>
            <TriMotorBtn>$124,490*</TriMotorBtn>
        </TriMotor>
        <PriceDesc>*Prices above include potential incentives and gas savings of $5,500.<p>Learn More</p></PriceDesc>
        <MotorFeatureBtn>Feature Details</MotorFeatureBtn>
        <Paint>Paint</Paint>
        <PaintBtn></PaintBtn>
        <PaintDesc>Pearl White Multi-Coat Included</PaintDesc>
        <Wheels>Wheels</Wheels>
        <WheelBtn></WheelBtn>
        <WheelDesc>21" Arachnid Wheels</WheelDesc>
        <WheelDesc>$4,500</WheelDesc>
        <WheelsRange>Range (est.): 375mi</WheelsRange>
        <Interior>Interior</Interior>
        <InteriorBtn></InteriorBtn>
        <InteriorDesc>All Black</InteriorDesc>
        <InteriorDesc>Included</InteriorDesc>
        <InteriorColor>Ebony Décor</InteriorColor>
        <InteriorFeatureBtn>Feature Details</InteriorFeatureBtn>
        <SelfDriving>Full Self-Driving Capability</SelfDriving>
        <SelfDrivingPrice>$10,000</SelfDrivingPrice>
        <SelfDrivingList>
            <SelfDrivingListItem>Navigate on Autopilot</SelfDrivingListItem>
            <SelfDrivingListItem>Auto Lane Change</SelfDrivingListItem>
            <SelfDrivingListItem>Autopark</SelfDrivingListItem>
            <SelfDrivingListItem>Summon</SelfDrivingListItem>
            <SelfDrivingListItem>Full Self-Driving Computer</SelfDrivingListItem>
            <SelfDrivingListItem>Traffic Light and Stop Sign Control</SelfDrivingListItem>
        </SelfDrivingList>
        <ComingSoon>Coming Soon</ComingSoon>
        <AutoSteer>Autosteer on city streets</AutoSteer>
        <SelfDrivingDesc>The currently enabled features require active driver 
        supervision and do not make the vehicle autonomous. The activation and use of these features 
        are dependent on achieving reliability far in excess of human drivers as demonstrated by 
        billions of miles of experience, as well as regulatory approval, which may take longer in 
        some jurisdictions. As these self-driving features evolve, your car will be continuously 
        upgraded through over-the-air software updates.</SelfDrivingDesc>
        <SelfDrivingBtns>
            <SelfDrivingAddBtn>Add</SelfDrivingAddBtn>
            <SelfDrivingFeatureBtn>Feature Details</SelfDrivingFeatureBtn>
        </SelfDrivingBtns>
        <OrderModel>Order Your Model S</OrderModel>
        <OrderModelDelivery>Est. Delivery: June</OrderModelDelivery>
        <PaymentBtn>Continue Payment</PaymentBtn>
        </WidgetNav>
        <FooterItemBox>
            <FooterBtn>*</FooterBtn>
            <FooterItem>$100,990 Purchase price</FooterItem>
            <FooterItem>$95,490 After potential savings</FooterItem>
        </FooterItemBox>
        </Wrap>
    )
}

export default ModelSDesign


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModelSBlackDesign1.png') */
`

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
`

const WidgetTitle = styled.div`
    padding-top: 5px;
    font-size: 40px;
    color: #393c41;
`

const DeliveryTime = styled.div`
    padding-top: 9px;
    color: #393c41;
`

const WidgetPriceTab = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 8px;
`

const WidgetPrice = styled.div`
    padding-top: 9px;
    color: #393c41;
`

const WidgetSavings = styled.div`
    padding-top: 9px;
    color: #393c41;
`

const WidgetCarDetails = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2px;
 
`

const DetailsItem = styled.div`
    padding-top: 2px;
    font-size: 15px;
    color: #393c41;
`

const DetailsSubItem = styled.div`
    padding-top: 2px;
    color: #393c41;
`

const DualMotor = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`

const DualMotorBtn = styled.div`

`

const TriMotor = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`

const TriMotorBtn = styled.div`
    padding-top: 10px;
`

const PriceDesc = styled.div`
    padding-top: 10px;
`

const MotorFeatureBtn = styled.div`
    padding-top: 10px;
`

const Paint = styled.div`
    padding-top: 10px;
    font-size: 40px;
    color: #393c41;
`

const PaintBtn = styled.div`
    padding-top: 10px;
`

const PaintDesc = styled.div`
    padding-top: 10px;
`

const Wheels = styled.div`
    padding-top: 10px;
    font-size: 30px;
    color: #393c41;
`

const WheelBtn = styled.div`

`

const WheelDesc = styled.div`
    padding-top: 10px;
`

const WheelsRange = styled.div`
    padding-top: 10px;
`

const Interior = styled.div`
    font-size: 30px;
`

const InteriorBtn = styled.div`

`

const InteriorDesc = styled.div`
    padding-top: 10px;
`

const InteriorColor = styled.div`
    padding-top: 10px;
`

const InteriorFeatureBtn = styled.div`

`

const SelfDriving = styled.div`
    padding-top: 10px;
    font-size: 30px;
`

const SelfDrivingPrice = styled.div`
    padding-top: 10px;
`

const SelfDrivingList = styled.div`
    padding-top: 10px;
`

const SelfDrivingListItem = styled.div`
    padding-top: 10px;
`

const ComingSoon = styled.div`
    padding-top: 10px;

`

const AutoSteer = styled.div`
    padding-top: 10px;
`

const SelfDrivingDesc = styled.div`
    padding-top: 10px;
`

const SelfDrivingBtns = styled.div`
    padding-top: 10px;
`

const SelfDrivingAddBtn = styled.div`

`

const SelfDrivingFeatureBtn = styled.div`

`

const OrderModel = styled.div`
    padding-top: 10px;
    font-size: 30px;
`

const OrderModelDelivery = styled.div`
    padding-top: 10px;
`

const PaymentBtn = styled.div`
    padding-top: 10px;
`

const FooterItemBox = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2px;
`

const FooterBtn = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
`

const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    color: #393c41;
`

