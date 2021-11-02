import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
// import banner from './images/teslaFont.png';
import { BrowserRouter as Link } from 'react-router-dom';


const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <Container>
            {/* <Logo src={banner}></Logo>
            <Link to='/'>
            </Link> */}
            <Logo>
            <Link to='/'>
                <img src='/images/logo.svg' alt="" />
                </Link>
                </Logo>
            <MainMenu>
                <Link to='/models'>
                <HeaderItem>Model S</HeaderItem>
                </Link>
                <Link to='/model3'>
                <HeaderItem>Model 3</HeaderItem>
                </Link>
                <Link to='/modelx'>
                <HeaderItem>Model X</HeaderItem>
                </Link>
                <Link to='/modely'>
                <HeaderItem>Model Y</HeaderItem>
                </Link>
                <Link to='/solarroof'>
                <HeaderItem>Solar Roof</HeaderItem>
                </Link>
                <Link to='/solarpanels'>
                <HeaderItem>Solar Panels</HeaderItem>
                </Link>
            </MainMenu>
            <RightMenu>
                <MenuRightItem>Shop</MenuRightItem>
                <MenuRightItem>Account</MenuRightItem>
                <MenuTab onClick={() => setMenuStatus(true)}>Menu</MenuTab>
            </RightMenu>
            <MenuNavWidget show={menuStatus}>
            <CloseWrapper>
            <CustomClose onClick={() => setMenuStatus(false)}/>
            </CloseWrapper>
                <MenuNavWidgetItem>Existing Inventory</MenuNavWidgetItem>
                <MenuNavWidgetItem>Used Inventory</MenuNavWidgetItem>
                <MenuNavWidgetItem>Trade-In</MenuNavWidgetItem>
                <MenuNavWidgetItem>Test Drive</MenuNavWidgetItem>
                <MenuNavWidgetItem>Cybertruck</MenuNavWidgetItem>
                <MenuNavWidgetItem>Roadster</MenuNavWidgetItem>
                <MenuNavWidgetItem>Semi</MenuNavWidgetItem>
                <MenuNavWidgetItem>Charging</MenuNavWidgetItem>
                <MenuNavWidgetItem>Powerwall</MenuNavWidgetItem>
                <MenuNavWidgetItem>Commercial Energy</MenuNavWidgetItem>
                <MenuNavWidgetItem>Utilities</MenuNavWidgetItem>
                <MenuNavWidgetItem>Find Us</MenuNavWidgetItem>
                <MenuNavWidgetItem>Support</MenuNavWidgetItem>
                <MenuNavWidgetItem>Invenstor Relations</MenuNavWidgetItem>
            </MenuNavWidget>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 60px;
    position: fixed;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Logo = styled.div`
    cursor: pointer;
`

const MainMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 70px;
    font-weight: 500;
    padding: 0 10px;
    flex-wrap: nowrap;
`

const HeaderItem = styled.div`
    display: flex;
    padding-left: 30px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`


const RightMenu = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-right: 10px;

`

const MenuRightItem = styled.div`
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
`

const MenuTab = styled.div`
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const MenuNavWidget = styled.div`
    display: flex;
    text-align: start;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 1;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    
`

const MenuNavWidgetItem = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-weight: 600;
`


const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`


// With a tags and hrefs:
// const Header = () => {
//     const [menuStatus, setMenuStatus] = useState(false)
//     return (
//         <Container>
//             <a>
//             <Link to='/'>
//                 <img src='/images/logo.svg' alt="" />
//                 </Link>
//             </a>
//             <MainMenu>
//                 <Link to='/models'>
//                 Model S
//                 </Link>
//                 <Link to='/model3'>
//                 Model 3
//                 </Link>
//                 <Link to='/modelx'>
//                 Model X
//                 </Link>
//                 <Link to='/modely'>
//                 Model Y
//                 </Link>
//                 <Link to='/solarroof'>
//                 Solar Roof
//                 </Link>
//                 <Link to='/solarpanels'>
//                 Solar Panels
//                 </Link>
//             </MainMenu>
//             <RightMenu>
//                 <a href="#">Shop</a>
//                 <a href="#">Account</a>
//                 <a href="#" onClick={() => setMenuStatus(true)}>Menu</a>
//             </RightMenu>
//             <MenuNav show={menuStatus}>
//             <CloseWrapper>
//             <CustomClose onClick={() => setMenuStatus(false)}/>
//             </CloseWrapper>
//                 <li><a href='#'>Existing Inventory</a></li>
//                 <li><a href='#'>Used Inventory</a></li>
//                 <li><a href='#'>Trade-In</a></li>
//                 <li><a href='#'>Test Drive</a></li>
//                 <li><a href='#'>Cybertruck</a></li>
//                 <li><a href='#'>Roadster</a></li>
//                 <li><a href='#'>Semi</a></li>
//                 <li><a href='#'>Charging</a></li>
//                 <li><a href='#'>Powerwall</a></li>
//                 <li><a href='#'>Commercial Energy</a></li>
//                 <li><a href='#'>Utilities</a></li>
//                 <li><a href='#'>Find Us</a></li>
//                 <li><a href='#'>Support</a></li>
//                 <li><a href='#'>Invenstor Relations</a></li>
//             </MenuNav>
//         </Container>
//     )
// }

// export default Header

// const Container = styled.div`
//     display: flex;
//     align-items: center;
//     min-height: 60px;
//     position: fixed;
//     padding: 0 20px;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 1;
//     a {
//         cursor: pointer;
//     }
// `

// const MainMenu = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex: 1;
//     padding-left: 70px;
//     a {
//         font-weight: 500;
//         padding: 0 10px;
//         flex-wrap: nowrap;
//     } 
//     `


// const MenuItem = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex: 1;
//     padding-left: 70px;
//     /* font-weight: 500;
//     padding: 0 10px;
//     flex-wrap: nowrap; */
//     `

// const RightMenu = styled.div`
//     display: flex;
//     align-items: center;
//     a {
//         font-weight: 500;
//         margin-right: 10px;
//     }
// `

// const MenuNav = styled.div`
//     display: flex;
//     text-align: start;
//     flex-direction: column;
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     background: white;
//     width: 300px;
//     z-index: 1;
//     list-style: none;
//     padding: 20px;
//     transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
//     transition: transform 0.2s;
//     li {
//         padding: 15px 0;
//         border-bottom: 1px solid rgba(0, 0, 0, .2);
//         a {
//             font-weight: 600;
//         }
//     }
//     `

// const CustomClose = styled(CloseIcon)`
//     cursor: pointer;
// `

// const CloseWrapper = styled.div`
//     display: flex;
//     justify-content: flex-end;
// `