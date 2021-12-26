import styled from 'styled-components';
// import { useState, useRef } from 'react';
import { Carousel } from "react-responsive-carousel";
import CarImg from "../media/teslaModelSWhiteDesign.png";
// import CarImg2 from "./media/teslaModelSWhiteDesign.png";
// import CarImg3 from "./media/teslaModelSWhiteDesign3.png";
// import CarImg4 from "./media/teslaModelSWhiteDesign4.png";
// import CarImg5 from "./media/teslaModelSBlackInterior.png";

const Slider = () => {
    return (
        <Carousel autoplay>
            <div>
                <img
                    alt=""
                    // src="https://static-assets.tesla.com/configurator/compositor?&options=$MTS12,$PPSW,$IBE00,$ST0Y&view=INTERIOR&model=ms&size=1920&bkba_opt=2&version=v0028d202112220408&crop=0,0,0,0&version=v0028d202112220408"
                    src={CarImg}
                />
            </div>
            {/* <div>
                <img
                    alt=""
                    src="./media/teslaModelSWhiteDesign.png"
                />
            </div>
            <div>
                <img
                    alt=""
                    src="./media/teslaModelSWhiteDesign3.png"
                />
            </div>
            <div>
                <img
                    alt=""
                    src="./media/teslaModelSWhiteDesign4.png"
                />
            </div>
            <div>
                <img
                    alt=""
                    src="./media/teslaModelSBlackInterior.png"
                />
            </div> */}
        </Carousel>
    )
}

export default Slider;
