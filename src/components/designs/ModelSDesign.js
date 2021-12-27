import styled from 'styled-components/macro'
import ScrollFeature from '../ScrollFeature';
import CarouselContainer from '../CarouselContainer';
import Header from '../Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterContainer from './FooterContainer';


const ModelSDesign = () => {
    return (
        <Container>
            <Header />
            <ContentSection>
                <CarouselContainer />
                <ScrollFeature />
            </ContentSection>
            <FooterContainer />
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



