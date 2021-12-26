// import styled from 'styled-components/macro';
// import { useState, useRef } from 'react';
import { Carousel } from "react-responsive-carousel";
import CarImg from "../media/teslaModelSWhiteDesign2.png";
import CarImg2 from "../media/teslaModelSWhiteDesign.png";
import CarImg3 from "../media/teslaModelSWhiteDesign3.png";
import CarImg4 from "../media/teslaModelSWhiteDesign4.png";
import CarImg5 from "../media/teslaModelSBlackInterior.png";

const Slider = () => {
    return (
        <Carousel autoplay>
            <div>
                <img
                    alt=""
                    src={CarImg}
                />
            </div>
            <div>
                <img
                    alt=""
                    src={CarImg2}
                />
            </div>
            <div>
                <img
                    alt=""
                    src={CarImg3}
                />
            </div>
            <div>
                <img
                    alt=""
                    src={CarImg4}
                />
            </div>
            <div>
                <img
                    alt=""
                    src={CarImg5}
                />
            </div>
        </Carousel>
    )
}

export default Slider;
