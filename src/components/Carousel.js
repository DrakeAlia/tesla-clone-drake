import styled from 'styled-components';
import { useState } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

const Carousel = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/images/img${index + 1}.png`}
                            alt=""
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        </div>
    )
}

export default Carousel;

const container = styled.div` 
    width: 700px;
    height: 500px;
    margin: 100px auto 0;
    position: relative;
    overflow: hidden;
    shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    @media screen and(width: 700px){
    .container {
        margin: 100px 10px 0;
    }
}
`

const slide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease -in -out 0.4s;
`

 const btn = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const btnImg = styled.div`
    width: 25px;
    height: 25px;
    pointer: none;
`

const prev = styled.div` 
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
`

const next = styled.div` 
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
`


// class Carousel extends React.Component {
//     state = {
//         photos: [],
//         active: 0
//     }
//     static getDerivedStateFromProps({ media }) {
//         let photos = [];

//         if (media && media.photos && media.photos.photo) {
//             photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
//         }
//         return { photos };
//     }
//     render () {
//         const { photos, active } = this.state;

//         return (
//             <div className="carousel">
//                 <img src={photos[active].value} alt="primary car" />
//                 <div className="carousel-smaller">
//                     {photos.map((photo, index) => (
//                     <img 
//                         key={photo.value} 
//                         src={photo.value} 
//                         className={index === active ? "active" : ""}
//                         alt="car thumbnail"
//                         />
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

