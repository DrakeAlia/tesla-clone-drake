import styled from 'styled-components';
import { useState } from 'react';
import BtnSlider from './BtnSlider';
import DataSlider from './DataSlider';



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== DataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === DataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(DataSlider.length)
        }
    }

    return (
        <div className="container-slider">
            {DataSlider.map((obj, index) => {
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

export default Slider;
