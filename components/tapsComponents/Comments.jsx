import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Loding from "../helper/Loding";
function Comments({singelSlugComments , singelSlug}) {
  const {handleClickAvtiveLike ,activLike } = useStateContext()
  if(!singelSlugComments){
    return <Loding/>
  }
  return (
    <div className="container mx-auto pt-10">
      <h4 className="text-2xl text-[#17233e] font-Poppins capitalize font-bold py-4  border-b ">
        Showing 16 Verified Guest Comments
      </h4>
      {singelSlugComments.map(item => (
      <div key={item.id} className=" relative flex flex-col md:flex-row gap-3 md:mt-4">
      {/* arrow  */}
      {/* <div
      style={{ borderWidth:"31px", borderStyle: "solid", borderColor: "transparent #e6eef5 transparent transparent"}}
      className="  hidden md:block  absolute top-[12px] left-[50px]"></div> */}
      {/* img */}
      {/* <div className="flex justify-center items-start  py-3 px-5">
        <Image
          src={commentImg}
          width={100}
          height={90}
          layout={"intrinsic"}
          alt="comment"
          className="rounded-2xl"
          objectFit="cover"
          loading="lazy"
        />
      </div> */}
      {/* comment */}
      <div className="flex flex-col p-3 bg-[#e6eef5] gap-3 rounded-lg  ">
     <div className=" md:flex md:justify-between">
     <h2 className="text-[#17233e] text-xl font-Poppins capitalize text-center">
          {item.name}
        </h2>
        {/* <p className="text-[#777] text-center font-Poppins text-sm  ">
          {" "}
          April 25, 2022 at 10:46 am
        </p> */}
     </div>
        {/* star */}
        {/* <div className="flex gap-2 justify-center items-center md:justify-start">
          {" "}
          <BsFillStarFill size={24} color="#ffbc00" />{" "}
          <BsFillStarFill size={24} color="#ffbc00" />{" "}
          <BsFillStarFill size={24} color="#ffbc00" />{" "}
          <BsFillStarFill size={24} color="#ffbc00" />{" "}
          <BsFillStarFill size={24} color="#ffbc00" />{" "}
        </div> */}
        <h5 className="text-[#777] text-xl font-Poppins font-bold text-center  md:text-left">
        <span className="text-lg ">comment about:</span> {singelSlug.title}

        </h5>
        <p className="text-[#777] text-center text-lg leading-6 mx-7 md:mx-0 md:text-left">
          {item.comment}
        </p>
        {/* footer */}
        {/* <div className="flex justify-between items-center ">
          <div className="  group w-[74%] pt-6 flex justify-start items-center  ">
            <button className=" wrapper  md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
              read more
            </button>
          </div>
            <div className="flex justify-between flex-1 items-end mt-8"> 
              <FaThumbsUp onClick={()=> handleClickAvtiveLike("like")}  className= {activLike.like ? "  text-[#292e8c]  cursor-pointer " :" text-[#777] cursor-pointer "  }  size={30} />    
              <FaThumbsDown onClick={()=> handleClickAvtiveLike("dislike")} className={activLike.dislike ? " text-[#292e8c]  cursor-pointer "  :"text-[#777] cursor-pointer "  } size={30} />    
            </div>
        </div> */}

      </div>
    </div>

      ))}
    </div>
  );
}

export default Comments;
