import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Container>
            <Link to='/'>
                <img src='/images/logo.svg' alt="" />
            </Link>
        </Container>

        // <Container2>
        //     <Link to='/'>
        //         <img src='/images/logo.svg' alt="" />
        //     </Link>
        // </Container2>
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

// const Container2 = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding-top: 15px;
//     padding-left: 5px;
//     img {
//         cursor: pointer;
//     }
// `