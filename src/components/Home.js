import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='teslaModelS.png'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg='teslaYBlue.png'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='tesla3.png'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='teslaX.png'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Solar Panels'
                description='Lowest Cost Solar Panels in America'
                backgroundImg='teslaPanels.png'
                leftBtnText='Custom Order'
                rightBtnText='Learn More'
            />
            <Section 
                title='Solar Roof'
                description='Produce Clean Energy From Your Roof'
                backgroundImg='teslaRoof.png'
                leftBtnText='Custom Order'
                rightBtnText='Learn More'
            />
            <Section 
                title='Accessories'
                backgroundImg='accessories.jpg'
                leftBtnText='Shop Now'
            />
        </Container>
    )
}

export default Home

// Container for the Home page which has a list of models and solar utilities
const Container = styled.div`
    height: 100vh;
    color: #393c41;
    text-decoration: underline;
`