import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import teslaLogo from '../media/logo.svg'

const Logo = () => {
    return (
        <Container>
            <Link to='/'>
                <img
                    src={teslaLogo}
                    alt="" />
            </Link>
        </Container>
    )
}

export default Logo

// Container for the logo (Fix styling!!)
const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    padding: 0 20px;
    cursor: pointer;
`