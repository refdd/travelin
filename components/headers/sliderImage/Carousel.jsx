import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
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
function Carousel({gallery}) {
  if(!gallery) {
    return <p>wait</p>
  }
  return (
    <div>
    <Slider {...settings}>
      { gallery && gallery.map(item =>{
        return (
          <div key={item.id} className='imageSlider pl-3  pr-3  justify-center items-center'>
       <Image
        loader={() =>{
          return `${item.image}`;
        }
       }
       src={`${item.image}`}
       width={800}  
       height={600}  
       className="rounded-lg"
       layout='intrinsic'
       
       />
      </div>
        )
       
      })}
    </Slider>
  </div>
  )
}

export default Carousel