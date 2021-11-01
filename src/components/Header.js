import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt="" />
            </a>
            <MainMenu>
                <Link to='/models'>
                Model S
                </Link>
                <Link to='/model3'>
                Model 3
                </Link>
                <Link to='/modelx'>
                Model X
                </Link>
                <Link to='/modely'>
                Model Y
                </Link>
                <Link to='/solarroof'>
                Solar Roof
                </Link>
                <Link to='/solarpanels'>
                Solar Panels
                </Link>
            </MainMenu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => setMenuStatus(true)}>Menu</a>
            </RightMenu>
            <MenuNav show={menuStatus}>
            <CloseWrapper>
            <CustomClose onClick={() => setMenuStatus(false)}/>
            </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Invenstor Relations</a></li>
            </MenuNav>
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

    a {
        cursor: pointer;
    }
`

const MainMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 70px;

    a {
        font-weight: 500;
        padding: 0 10px;
        flex-wrap: nowrap;
    } 
    `


const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 70px;
    /* font-weight: 500;
    padding: 0 10px;
    flex-wrap: nowrap; */
    `

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 500;
        margin-right: 10px;
    }
`

const MenuNav = styled.div`
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
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
    `

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`