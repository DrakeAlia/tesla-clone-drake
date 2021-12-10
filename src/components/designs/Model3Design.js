import styled from 'styled-components'
import { useEffect } from 'react';
import Logo from '../Logo';



const Model3Design = () => {
    useEffect(() => {
        // console.log('im here')
    }, []);

    // const [pricewidget, setPriceWidget] = useState(null)
    // const [allWheelDrive, setAllWheelDrive] = useState(null)
    // const [paint, setPaint] = useState(null)
    // const [wheels, setWheels] = useState(null)
    // const [interior, setInterior] = useState(null)

    return (
        <Wrap>
            <Logo />
            <WidgetNav>
                <WidgetTitle>Model 3</WidgetTitle>
                <DeliveryTime>Est. Devilvery: December</DeliveryTime>
                <WidgetPriceTab>
                    <WidgetPrice>Purchase Price</WidgetPrice>
                    <WidgetSavings>Potential Savings*</WidgetSavings>
                </WidgetPriceTab>
                <WidgetCarDetails>
                    <DetailsItem>
                        334mi
                        {/* <DetailsSideItem>mi</DetailsSideItem> */}
                        <DetailsSubItem>Range (est.)</DetailsSubItem>
                    </DetailsItem>
                    <DetailsItem>
                        145mph
                        {/* <DetailsSideItem>mph</DetailsSideItem> */}
                        <DetailsSubItem>Top Speed</DetailsSubItem>
                    </DetailsItem>
                    <DetailsItem>
                        4.2sec
                        {/* <DetailsSideItem>sec</DetailsSideItem> */}
                        <DetailsSubItem>0-60 mph</DetailsSubItem>
                    </DetailsItem>
                </WidgetCarDetails>
                <RearMotor> Rear-Wheel Drive
                    <RearMotorBtn>Model 3</RearMotorBtn>
                    <RearMotorBtn>$40,690*</RearMotorBtn>
                </RearMotor>
                <DualMotor> Dual Motor All-Wheel Drive
                    <DualMotorBtn>Model 3 Long Range</DualMotorBtn>
                    <DualMotorBtn>$46,690*</DualMotorBtn>
                    <DualMotorBtn>Model 3 Performance</DualMotorBtn>
                    <DualMotorBtn>$54,690*</DualMotorBtn>
                </DualMotor>
                <PriceDesc>*Prices above include potential incentives and gas savings of $4,300.<p>Learn More</p></PriceDesc>
                <MotorFeatureBtn>Feature Details</MotorFeatureBtn>
                <Paint>Paint</Paint>
                <PaintBtn></PaintBtn>
                <PaintDesc>Pearl White Multi-Coat Included</PaintDesc>
                <Wheels>Wheels</Wheels>
                <WheelBtn></WheelBtn>
                <WheelDesc>19" Sport Wheels</WheelDesc>
                <WheelDesc>$1,500</WheelDesc>
                <WheelsRange>Range (est.): 334mi</WheelsRange>
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
                <OrderModel>Order Your Model 3</OrderModel>
                <OrderModelDelivery>Est. Delivery: December</OrderModelDelivery>
                <PaymentBtn>Continue Payment</PaymentBtn>
            </WidgetNav>
            <FooterItemBox>
                <FooterBtn>*</FooterBtn>
                <FooterItem>$52,490 Purchase price</FooterItem>
                <FooterItem>$48,190 After potential savings</FooterItem>
            </FooterItemBox>
        </Wrap>
    )
}

export default Model3Design


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
    padding-top: 5vh;
    font-size: 40px;
    color: #393c41;
`

const DeliveryTime = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

const WidgetPriceTab = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
`

const WidgetPrice = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

const WidgetSavings = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

const WidgetCarDetails = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
 
`

const DetailsItem = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

// const DetailsSideItem = styled.div`
//     color: #393c41;
// `

const DetailsSubItem = styled.div`
    color: #393c41;
`

const RearMotor = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
`

const RearMotorBtn = styled.div`

`

const DualMotor = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
`

const DualMotorBtn = styled.div`

`

const PriceDesc = styled.div`

`

const MotorFeatureBtn = styled.div`

`

const Paint = styled.div`
    font-size: 40px;
    color: #393c41;
`

const PaintBtn = styled.div`

`

const PaintDesc = styled.div`

`

const Wheels = styled.div`
    font-size: 40px;
    color: #393c41;
`

const WheelBtn = styled.div`

`

const WheelDesc = styled.div`

`

const WheelsRange = styled.div`

`

const Interior = styled.div`

`

const InteriorBtn = styled.div`

`

const InteriorDesc = styled.div`

`

const InteriorColor = styled.div`

`

const InteriorFeatureBtn = styled.div`

`

const SelfDriving = styled.div`

`

const SelfDrivingPrice = styled.div`

`

const SelfDrivingList = styled.div`

`

const SelfDrivingListItem = styled.div`

`

const ComingSoon = styled.div`

`

const AutoSteer = styled.div`

`

const SelfDrivingDesc = styled.div`

`

const SelfDrivingBtns = styled.div`

`

const SelfDrivingAddBtn = styled.div`

`

const SelfDrivingFeatureBtn = styled.div`

`

const OrderModel = styled.div`

`

const OrderModelDelivery = styled.div`

`

const PaymentBtn = styled.div`

`

const FooterItemBox = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
`

const FooterBtn = styled.div`
    padding-top: 2vh;
    padding: 10px;
    color: #393c41;
`

const FooterItem = styled.div`
    padding-top: 2vh;
    padding: 10px;
    color: #393c41;
`

