import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import imageDestination from "../../../public/assets/images/trending-large.jpg";
import imageslider from "../../../public/assets/images/travel.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#121111ab" ,
       right: "7px" ,  borderRadius: "80%" ,}}
      onClick={onClick}
    />
  );
};
function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#121111ab"  , left: "7px" ,  borderRadius: "80%" ,     zIndex: "52",  }}
      onClick={onClick}
    />
  );
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
function Carousel() {
  return (
    <div>
    <Slider {...settings}>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
      <div className='imageSlider justify-center items-center'>
       <Image
       src={imageDestination}
       width={500}  
       height={500}  
       className="rounded-lg"
       layout='intrinsic'
       />
       
  
      
      </div>
    
      
    
    </Slider>
  </div>
  )
}

export default Carousel