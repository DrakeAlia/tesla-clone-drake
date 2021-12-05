import styled from 'styled-components'

const ModelSSlider = [
    {
        id: 1, 
        image: '/public/images/teslaModelSWhiteDesign2.png'
    },
    {
        id: 2, 
        image: '/public/images/teslaModelSWhiteDesign.png'
    },
    {
        id: 3, 
        image: '/public/images/teslaModelSWhiteDesign3.png'
    },
    {
        id: 4, 
        image: '/public/images/teslaModelSWhiteDesign4.png'
    },
    {
        id: 5, 
        image: '/public/images/teslaModelSBlackInterior.png'
    },
];

export default ModelSSlider;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }