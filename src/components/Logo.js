import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Container>
            <Link to='/'>
                <img src='/images/logo.svg' alt="" />
            </Link>  
        </Container>
    )
}

export default Logo


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
    cursor: pointer;
`