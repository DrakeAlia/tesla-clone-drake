import styled from 'styled-components/macro'
import ScrollFeature from '../ScrollFeature';
import Carousel from '../Carousel';
import Header from '../Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ModelSDesign = () => {
    return (
        <Container>
            <Header />
            <ContentSection>
                <Carousel />
                <ScrollFeature />
            </ContentSection>
        </Container>
    )
}

export default ModelSDesign


// Container for the whole page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
`

const ContentSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`



