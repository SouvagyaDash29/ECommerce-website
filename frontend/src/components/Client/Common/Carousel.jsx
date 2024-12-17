import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Home from "../../../Assets/Home.png"
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';


function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<CircleChevronRight className={className}
		onClick={onClick}
		style={{ ...style, display: "block", stroke: "black", fill: "white", width:"25", height:"25" }}
		/>
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	//   <div
	// 	className={className}
	// 	style={{ ...style, display: "block", background: "green" }}
	// 	onClick={onClick}
	//   />
	<CircleChevronLeft className={className}
	 onClick={onClick}
	 style={{ ...style, display: "block",stroke: "black", fill: "white", width:"25", height:"25"}}
	 />
	);
  }

const Carousel = () => {
	var settings = {
		dots: true,
		fade: true,
   	 	infinite: true,
    	speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
    	autoplaySpeed: 3000,
		pauseOnHover: true,
		waitForAnimate: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		
	  };

  return (

		<Slider {...settings} className='-z-10'>
        <img src={Home} alt="" className='size-[33vw] pb-3 ' />
        <img src={Home} alt="" className='size-[33vw] pb-3 ' />
        <img src={Home} alt="" className='size-[33vw] pb-3 ' />
        <img src={Home} alt="" className='size-[33vw] pb-3 ' />
       
    </Slider>

  )
}

export default Carousel