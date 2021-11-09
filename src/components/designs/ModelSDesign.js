import styled from 'styled-components'
import Fade  from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import Logo from '../Logo';



const ModelSDesign = () => {
    useEffect(() => {        
        console.log('im here')
      },[]);
    const [widget, setWidget ] = useState(null)
    return (
        <Wrap>
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
            375 mi
            {/* <DetailsSideItem>mi</DetailsSideItem> */}
            <DetailsSubItem>Range (est.)</DetailsSubItem>
            </DetailsItem>
            <DetailsItem>
            155 mph
            {/* <DetailsSideItem>mph</DetailsSideItem> */}
            <DetailsSubItem>Top Speed</DetailsSubItem>
            </DetailsItem>
            <DetailsItem>3.1sec
            {/* <DetailsSideItem>sec</DetailsSideItem> */}
            <DetailsSubItem>0-60 mph</DetailsSubItem>
            </DetailsItem>
        </WidgetCarDetails>
        </WidgetNav>
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
    padding-top: 15vh;
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
const DetailsSideItem = styled.div`
    color: #393c41;
`

const DetailsSubItem = styled.div`
    color: #393c41;
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

const TriMotor = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
`

const TriMotorBtn = styled.div`

`

const PriceDesc = styled.div`

`

const FeatureBtn = styled.div`

`

const Paint = styled.div`

`
const PaintBtn = styled.div`

`

const PaintDesc = styled.div`

`

const Wheels = styled.div`

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

`

const FooterBtn = styled.div`

`

const FooterItem = styled.div`

`

