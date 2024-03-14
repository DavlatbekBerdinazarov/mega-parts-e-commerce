import React, { useState } from "react";
import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
export default function ProductImageSlides({ imgs }) {

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    console.log(index);
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };


  return (
    <figure className="w-full flex items-center justify-center">
      <div className="">
        <div className="flex relative">
          <button className="absolute top-[45%] opacity-50 md:hidden" onClick={handlePrevious}>
            <IoMdArrowDropleftCircle className="text-3xl" />
          </button>
          <div className=" transition-shadow select-none w-[380px] h-[380px] rounded-lg border-[1px] border-[#DEE2E7] p-2">
            <img className="w-full h-full" src={wordData.img} alt="parts" />
          </div>
          <button className="absolute top-[45%] right-0 opacity-50 md:hidden" onClick={handleNext}>
            <IoMdArrowDroprightCircle className="text-3xl" />
          </button>
        </div>
        <div className="my-3 flex gap-2">
          {imgs.map((data, i) => (
            <div
              className={`cursor-pointer h-[56px] w-[56px] rounded-lg p-2 border-[1px] ${
                wordData.id - 1 == i ? `border-black` : `border-[#DEE2E7]`
              } flex items-center justify-center select-none`}
              key={i}
            >
              <img
                className={`h-fit w-fit`}
                src={data.img}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
