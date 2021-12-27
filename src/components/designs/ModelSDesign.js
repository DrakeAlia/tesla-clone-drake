import styled from 'styled-components/macro'
import Header from '../Header';
import CarouselContainer from '../CarouselContainer';
import ScrollFeature from '../ScrollFeature';
import FooterContainer from './FooterContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ModelSDesign = () => {
    return (
        <ContainerColumn>
            <Header />
            <ContentSection>
                <CarouselContainer />
                <ScrollFeature />
            </ContentSection>
            <FooterContainer />
        </ContainerColumn>
    )
}

export default ModelSDesign


// Container for the whole page
const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
     
`

const ContentSection = styled.div`
    display: flex;
`



