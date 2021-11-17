import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title='Model S'
                description='Plaid'
                backgroundImg='teslaModelS.png'
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='New Interior'
                description=''
                backgroundImg=''
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='Model 3'
                description=''
                backgroundImg=''
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='Electric Powertrain'
                description=''
                backgroundImg=''
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='Exer'
                description=''
                backgroundImg=''
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='Solar Roof'
                description=''
                backgroundImg=''
                leftBtnText=''
                rightBtnText=''
            />
            <Section 
                title='Accessories'
                backgroundImg=''
                leftBtnText=''
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