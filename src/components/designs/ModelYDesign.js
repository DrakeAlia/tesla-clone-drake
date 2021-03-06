import styled from 'styled-components/macro'
import Header from '../Header';
import CarouselContainer from '../CarouselContainer';
import ScrollFeature from '../ScrollFeature';
import FooterContainer from './FooterContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const ModelYDesign = () => {
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
        //     <WidgetNav>
        //         <WidgetTitle>Model Y</WidgetTitle>
        //         <DeliveryTime>Est. Devilvery: June</DeliveryTime>
        //         <WidgetPriceTab>
        //             <WidgetPrice>Purchase Price</WidgetPrice>
        //             <WidgetSavings>Potential Savings*</WidgetSavings>
        //         </WidgetPriceTab>
        //         <WidgetCarDetails>
        //             <DetailsItem>
        //                 318mi
        //                 <DetailsSubItem>Range (est.)</DetailsSubItem>
        //             </DetailsItem>
        //             <DetailsItem>
        //                 135mph
        //                 <DetailsSubItem>Top Speed</DetailsSubItem>
        //             </DetailsItem>
        //             <DetailsItem>
        //                 4.8sec
        //                 <DetailsSubItem>0-60 mph</DetailsSubItem>
        //             </DetailsItem>
        //         </WidgetCarDetails>
        //         <DualMotor> Dual Motor All-Wheel Drive
        //             <DualMotorBtn>Model Y Long Range</DualMotorBtn>
        //             <DualMotorBtn>$53,690*</DualMotorBtn>
        //             <DualMotorBtn>Model Y Performance</DualMotorBtn>
        //             <DualMotorBtn>$58,690*</DualMotorBtn>
        //         </DualMotor>
        //         <PriceDesc>*Prices above include potential incentives and gas savings of $4,300.<p>Learn More</p></PriceDesc>
        //         <MotorFeatureBtn>Feature Details</MotorFeatureBtn>
        //         <Paint>Paint</Paint>
        //         <PaintBtn></PaintBtn>
        //         <PaintDesc>Pearl White Multi-Coat Included</PaintDesc>
        //         <Wheels>Wheels</Wheels>
        //         <WheelBtn></WheelBtn>
        //         <WheelDesc>20?????? Induction Wheels</WheelDesc>
        //         <WheelDesc>$2,000</WheelDesc>
        //         <WheelsRange>Range (est.): 318mi</WheelsRange>
        //         <Tow>Tow Hitch</Tow>
        //         <TowPrice>$1,000</TowPrice>
        //         <TowDesc>High strength, Class II steel tow bar capable of towing up to 3,500 lbs</TowDesc>
        //         <TowBtn>Add</TowBtn>
        //         <Interior>Interior</Interior>
        //         <InteriorBtn></InteriorBtn>
        //         <InteriorDesc>All Black</InteriorDesc>
        //         <InteriorDesc>Included</InteriorDesc>
        //         <InteriorColor>Ebony D??cor</InteriorColor>
        //         <InteriorFeatureBtn>Feature Details</InteriorFeatureBtn>
        //         <Seating>Seating Layout</Seating>
        //         <SeatingBtn></SeatingBtn>
        //         <SeatingLayouts>Five Seats Included</SeatingLayouts>
        //         <SeatingRange>Range (est.): 318mi</SeatingRange>
        //         <SeatingDesc>
        //             <SeatingItem>Second row with adjustable seatbacks</SeatingItem>
        //             <SeatingItem>Fold-flat second row for maximum cargo storage</SeatingItem>
        //             <SeatingItem>Electronic fold-flat releases in trunk</SeatingItem>
        //         </SeatingDesc>
        //         <ViewSeats>View Seating Layouts</ViewSeats>
        //         <SeatingDetails>Feature Details</SeatingDetails>
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
        //         <OrderModel>Order Your Model Y</OrderModel>
        //         <OrderModelDelivery>Est. Delivery: June</OrderModelDelivery>
        //         <PaymentBtn>Continue Payment</PaymentBtn>
        //     </WidgetNav>
        //     <FooterItemBox>
        //         <FooterBtn>*</FooterBtn>
        //         <FooterItem>$59,990 Purchase price</FooterItem>
        //         <FooterItem>$55,690 After potential savings</FooterItem>
        //     </FooterItemBox>
        // </Wrap>
    )
}

export default ModelYDesign


const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;  
`

const ContentSection = styled.div`
    display: flex;
`