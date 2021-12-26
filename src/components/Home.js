import styled from 'styled-components/macro';
import Section from './Section';

const Home = () => {
    return (
        <HomeContainer>
            <Container>
                <Section
                    title='Model S'
                    description='Order Online for Touchless Delivery'
                    backgroundImg='teslaModelS.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </Container>
            <Container>
                <Section
                    title='Model Y'
                    description='Order Online for Touchless Delivery'
                    backgroundImg='teslaYBlue.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </Container>
            <Container>
                <Section
                    title='Model 3'
                    description='Order Online for Touchless Delivery'
                    backgroundImg='tesla3.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </Container>
            <Container>
                <Section
                    title='Model X'
                    description='Order Online for Touchless Delivery'
                    backgroundImg='teslaX.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </Container>
            <Container>
                <Section
                    title='Solar Panels'
                    description='Lowest Cost Solar Panels in America'
                    backgroundImg='teslaPanels.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Learn More'
                />
            </Container>
            <Container>
                <Section
                    title='Solar Roof'
                    description='Produce Clean Energy From Your Roof'
                    backgroundImg='teslaRoof.png'
                    leftBtnText='Custom Order'
                    rightBtnText='Learn More'
                />
            </Container>
            <Container>
                <Section
                    title='Accessories'
                    backgroundImg='accessories.jpg'
                    leftBtnText='Shop Now'
                />
            </Container>
        </HomeContainer>
    )
}

export default Home

// Container for the Home page which has a list of models and solar utilities
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #393c41;
    /* width: 100%;
    height: 100%; */
    /* text-decoration: underline; */
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    
`