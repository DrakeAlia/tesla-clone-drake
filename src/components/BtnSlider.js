// import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

 const BtnSlider = ({ direction, moveSlide }) => {
    // console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? ArrowBackIosIcon : ArrowForwardIosIcon} alt="" />
        </button>
    );
}

export default BtnSlider;

