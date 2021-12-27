import styled from "styled-components/macro"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FooterContainer = () => {
    return (
        <Footer>
            <FooterBox>
                <FooterBtn>
                    <ExpandLessIcon></ExpandLessIcon>
                </FooterBtn>
                <FooterItem>$94,990 Vehicle Price</FooterItem>
                |
                <FooterItem2>$89,490 After potential savings</FooterItem2>
            </FooterBox>
        </Footer>
    )
}

export default FooterContainer

// Bottom container 
const Footer = styled.div`
    display: flex;
    justify-content: center;
`

const FooterBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 100px;
    width: 626px;
    background: #F7F9FC;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 59px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
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
    font-weight: 600;
`

const FooterItem2 = styled(FooterItem)`
   font-weight: 300;
`