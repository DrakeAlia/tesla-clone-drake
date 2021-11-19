import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
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
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
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

// Container for the title and descriptions of the item being displayed
const ItemText = styled.div`
    padding-top: 17vh;
`

// media for mobile/small screen 
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (max-width: 823px) {
        flex-direction: column;
    }
`

// Container for the LeftButton
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
    height: 45px;
    animation: animateDown infinite 2.5s;
    overflow-x: hidden;
`

// Container that has left and right button containers
const Buttons = styled.div`
`
