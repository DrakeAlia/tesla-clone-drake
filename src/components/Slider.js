import styled from 'styled-components';
import { useState, useRef } from 'react';
import BtnSlider from './BtnSlider';
import DataSlider from './DataSlider';


// const Slider = () => {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if (slideIndex !== DataSlider.length) {
//             setSlideIndex(slideIndex + 1)
//         }
//         else if (slideIndex === DataSlider.length) {
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if (slideIndex !== 1) {
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1) {
//             setSlideIndex(DataSlider.length)
//         }
//     }

//     return (
//         <div className="container-slider">
//             {DataSlider.map((obj, index) => {
//                 return (
//                     <div
//                         key={obj.id}
//                         className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img
//                             src={process.env.PUBLIC_URL + `/public/images/${index + 1}.png`}
//                             alt=""
//                         />
//                     </div>
//                 )
//             })}
//             {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
//         <Container>
//             <Slider />
//         </Container>

//         </div>
//     )
// }

// const Container = styled.div`
//     display: flex;
// `



const Slider = ({ images = [], ...props }) => {
    return (
        <Container {...props}>
            {images.map((index) => (
                <Slide
                    key={index}
                    style={{ backgroundImge: `/public/images/${index + 1}` }}
                ></Slide>
            ))}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    border: 3px solid red;
`

const Slide = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
`

export default Slider;
