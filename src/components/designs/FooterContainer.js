import styled from "styled-components/macro"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FooterContainer = () => {
    return (
        <Footer>
            <FooterOuter>
                <FooterBox>
                    <FooterBtn>
                        <ExpandLessIcon></ExpandLessIcon>
                    </FooterBtn>
                    <FooterItem>$100,990 Purchase price</FooterItem>
                    <FooterItem>$95,490 After potential savings</FooterItem>
                </FooterBox>
            </FooterOuter>
        </Footer>
    )
}

export default FooterContainer

// Bottom container 
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 2px;
    @media (max-width: 800px) {
        flex-direction: row;
    }
`

const FooterOuter = styled(Footer)`
`

const FooterBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid black 1px;
    border-radius: 100px;
    width: 500px;
    background: #F7F9FC;
`

// Footer button arrow
const FooterBtn = styled.div`
    display: flex;
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
    border-radius: 50px;
    background: #ffffff
`

// Footer items in container
const FooterItem = styled.div`
    padding-top: 2px;
    padding: 10px;
    cursor: pointer;
    color: #393c41;
`
