import React from 'react'
import styled, { keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade';
import { Translate } from '@material-ui/icons';

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Container>
                    <ItemText>
                        <Box>
                            <h1>{title}</h1>
                        </Box>
                        <Box>
                            <p>{description}</p>
                        </Box>
                    </ItemText>
                </Container>
            </Fade>
            <Container>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <ArrowBox>
                <DownArrow src="/images/down-arrow.svg" />
                </ArrowBox>
            </Buttons>
            </Container>
        </Wrap>
    )
}

export default Section

// Container for the Section page
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/teslaModelS.png');
    background-image: ${props => `url('/images/${props.bgImage}')`}
    /* background-image: url('/media/teslaModelS.png');
    background-image: ${props => `url('/media/${props.bgImage}')`} */
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
`

// Container for the title and descriptions of the item being displayed
const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 19px;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    height: 49px;
`

const ArrowBox = styled(Box)`
    
`

// media for mobile/small screen 
const ButtonGroup = styled.div`
    display: flex;
    
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

// Container for the LeftButton (Fix styling!!)
const LeftButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #ffffff;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

// Container for the RightButton next to LeftButton
const RightButton = styled(LeftButton)` 
    color: #393c41;
    background: #ffffff;
    opacity: 0.85;
`

// Arrow icon at bottom page 
const DownArrow = styled.img`
    display: flex;
    justify-content: center;
    height: 45px;
    animation: animateDown infinite 2.5s;
    overflow-x: hidden;
`

// Container that has left and right button containers
const Buttons = styled.div`
`

// @keyframes animateDown {
//     0%, 20%, 50%, 80%, 100% {
//         transform: translateY(0);
//     }
//     40% {
//         transform: translateY(5px);
//     }

//     60% {
//         transform: translateY(3px);
//     }
// }