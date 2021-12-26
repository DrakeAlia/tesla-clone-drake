import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
// import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <Container>
            {/* <Logo /> */}
            {/* <Link to='/'>
                <img src='/images/logo.svg' alt="" />
            </Link> */}
            {/* <Link to='/'>
                <Logo />
            </Link> */}
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
                <Link to='/shop'>Shop</Link>
                <Link to='/account'>Account</Link>
                <MenuTab onClick={() => setMenuStatus(true)}>Menu</MenuTab>
            </RightMenu>
            <MenuNav show={menuStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setMenuStatus(false)} />
                </CloseWrapper>
                <li><Link to="/inventory/new">Existing Inventory</Link></li>
                <li><Link to="/inventory/used">Used Inventory</Link></li>
                <li><Link to="/tradein">Trade-In</Link></li>
                <li><Link to="/drive">Test Drive</Link></li>
                <li><Link to="/cybertruck">Cybertruck</Link></li>
                <li><Link to="/roadster">Roadster</Link></li>
                <li><Link to="/semi">Semi</Link></li>
                <li><Link to="/charging">Charging</Link></li>
                <li><Link to="/powerwall">Powerwall</Link></li>
                <li><Link to="/commercial">Commercial Energy</Link></li>
                <li><Link to="/utilities">Utilities</Link></li>
                <li><Link to="/googlemaps">Find Us</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/tab-quarterly-disclosure">Invenstor Relations</Link></li>
            </MenuNav>
        </Container>
    )
}

export default Header

// Container for the whole header page (Fix styling!!)
const Container = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    width: 917px;
    position: fixed;
    padding: 0 20px;
`

// Container for the navbar/menu tabs for the models and solor roof/panel
const MainMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-left: 15%;
    a {
        font-weight: 530;
        color: #393c41;
        padding: 0 10px;
        flex-wrap: nowrap;
    } 
    /* :hover {
        background-color: #393c41;
        
    } */
`

// Container for the side navbar on right side of the main navbar
const RightMenu = styled.div`
    display: flex;
    a {
        font-weight: 500;
        color: #393c41;
        margin-right: 15px;
    }
`

// Container for the menu button inside the RightMenu container
const MenuTab = styled.div`
    font-weight: 500;
    color: #393c41;
    margin-right: 10px;
    cursor: pointer;
`

// Container for the list of items inside the MenuNav (Fix styling!!)
const MenuNav = styled.div`
    display: flex;
    text-align: start;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    width: 300px;
    z-index: 1;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            color: #393c41;
            font-weight: 600;
        }
    }
`

// Container for the Close (X) icon inside the MenuNav
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

// The Close (X) icon inside the MenuNav
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

