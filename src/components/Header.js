import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/teslaFont.png" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#">Menu</a>
            </RightMenu>
        </Container>
    )
}

{/* <img src="/images/logo.svg" alt="" /> */}

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
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 500;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    a {
        font-weight: 500;
        margin-right: 10px;
    }
`