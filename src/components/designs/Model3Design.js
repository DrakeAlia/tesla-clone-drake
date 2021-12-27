// import { useEffect } from 'react';
import styled from 'styled-components/macro'
import Header from '../Header';
import CarouselContainer from '../CarouselContainer';
import ScrollFeature from '../ScrollFeature';
import FooterContainer from './FooterContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Model3Design = () => {
    return (
        <ContainerColumn>
            <Header />
            <ContentSection>
                <CarouselContainer />
                <ScrollFeature />
            </ContentSection>
            <FooterContainer />
        </ContainerColumn>

        // <Wrap>
        // <Header />
        //     <WidgetNav>
        //         <WidgetTitle>Model 3</WidgetTitle>
        //         <DeliveryTime>Est. Devilvery: December</DeliveryTime>
        //         <WidgetPriceTab>
        //             <WidgetPrice>Purchase Price</WidgetPrice>
        //             <WidgetSavings>Potential Savings*</WidgetSavings>
        //         </WidgetPriceTab>
        //         <WidgetCarDetails>
        //             <DetailsItem>
        //                 334mi
        //                 {/* <DetailsSideItem>mi</DetailsSideItem> */}
        //                 <DetailsSubItem>Range (est.)</DetailsSubItem>
        //             </DetailsItem>
        //             <DetailsItem>
        //                 145mph
        //                 {/* <DetailsSideItem>mph</DetailsSideItem> */}
        //                 <DetailsSubItem>Top Speed</DetailsSubItem>
        //             </DetailsItem>
        //             <DetailsItem>
        //                 4.2sec
        //                 {/* <DetailsSideItem>sec</DetailsSideItem> */}
        //                 <DetailsSubItem>0-60 mph</DetailsSubItem>
        //             </DetailsItem>
        //         </WidgetCarDetails>
        //         <RearMotor> Rear-Wheel Drive
        //             <RearMotorBtn>Model 3</RearMotorBtn>
        //             <RearMotorBtn>$40,690*</RearMotorBtn>
        //         </RearMotor>
        //         <DualMotor> Dual Motor All-Wheel Drive
        //             <DualMotorBtn>Model 3 Long Range</DualMotorBtn>
        //             <DualMotorBtn>$46,690*</DualMotorBtn>
        //             <DualMotorBtn>Model 3 Performance</DualMotorBtn>
        //             <DualMotorBtn>$54,690*</DualMotorBtn>
        //         </DualMotor>
        //         <PriceDesc>*Prices above include potential incentives and gas savings of $4,300.<p>Learn More</p></PriceDesc>
        //         <MotorFeatureBtn>Feature Details</MotorFeatureBtn>
        //         <Paint>Paint</Paint>
        //         <PaintBtn></PaintBtn>
        //         <PaintDesc>Pearl White Multi-Coat Included</PaintDesc>
        //         <Wheels>Wheels</Wheels>
        //         <WheelBtn></WheelBtn>
        //         <WheelDesc>19" Sport Wheels</WheelDesc>
        //         <WheelDesc>$1,500</WheelDesc>
        //         <WheelsRange>Range (est.): 334mi</WheelsRange>
        //         <Interior>Interior</Interior>
        //         <InteriorBtn></InteriorBtn>
        //         <InteriorDesc>All Black</InteriorDesc>
        //         <InteriorDesc>Included</InteriorDesc>
        //         <InteriorColor>Ebony Décor</InteriorColor>
        //         <InteriorFeatureBtn>Feature Details</InteriorFeatureBtn>
        //         <SelfDriving>Full Self-Driving Capability</SelfDriving>
        //         <SelfDrivingPrice>$10,000</SelfDrivingPrice>
        //         <SelfDrivingList>
        //             <SelfDrivingListItem>Navigate on Autopilot</SelfDrivingListItem>
        //             <SelfDrivingListItem>Auto Lane Change</SelfDrivingListItem>
        //             <SelfDrivingListItem>Autopark</SelfDrivingListItem>
        //             <SelfDrivingListItem>Summon</SelfDrivingListItem>
        //             <SelfDrivingListItem>Full Self-Driving Computer</SelfDrivingListItem>
        //             <SelfDrivingListItem>Traffic Light and Stop Sign Control</SelfDrivingListItem>
        //         </SelfDrivingList>
        //         <ComingSoon>Coming Soon</ComingSoon>
        //         <AutoSteer>Autosteer on city streets</AutoSteer>
        //         <SelfDrivingDesc>The currently enabled features require active driver
        //             supervision and do not make the vehicle autonomous. The activation and use of these features
        //             are dependent on achieving reliability far in excess of human drivers as demonstrated by
        //             billions of miles of experience, as well as regulatory approval, which may take longer in
        //             some jurisdictions. As these self-driving features evolve, your car will be continuously
        //             upgraded through over-the-air software updates.</SelfDrivingDesc>
        //         <SelfDrivingBtns>
        //             <SelfDrivingAddBtn>Add</SelfDrivingAddBtn>
        //             <SelfDrivingFeatureBtn>Feature Details</SelfDrivingFeatureBtn>
        //         </SelfDrivingBtns>
        //         <OrderModel>Order Your Model 3</OrderModel>
        //         <OrderModelDelivery>Est. Delivery: December</OrderModelDelivery>
        //         <PaymentBtn>Continue Payment</PaymentBtn>
        //     </WidgetNav>
        //     <FooterItemBox>
        //         <FooterBtn>*</FooterBtn>
        //         <FooterItem>$52,490 Purchase price</FooterItem>
        //         <FooterItem>$48,190 After potential savings</FooterItem>
        //     </FooterItemBox>
        // </Wrap>
    )
}

export default Model3Design



const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const ContentSection = styled.div`
    display: flex;
`