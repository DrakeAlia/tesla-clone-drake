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

// Container for the logo 
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
    img {
        cursor: pointer;
    }
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