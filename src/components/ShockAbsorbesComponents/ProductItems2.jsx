import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

export default function ProductItems2({ element, index }) {
  const [like, setLike] = useState(false);

  return (
    <div
    key={index}
    className=" p-5 flex flex-col justify-center items-center bg-white rounded-md border-[1px] border-[#DEE2E7]"
  >
    <div className="h-[184px] w-[184px] mb-4 flex justify-center items-center ">
      <img src={element.img} alt="" />
    </div>
    <div className="flex">
      <div className="">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold underline">
            Show price
          </h1>
          <h3 className>{element.title}</h3>
        </div>
      </div>
      <div
        onClick={() => setLike(prev => !prev)}
        className="hidden w-16 h-10 lg:flex items-center justify-center border-2 rounded-lg"
      >
        {like ? (
          <FaHeart className="text-2xl text-red-600" />
        ) : (
          <FaRegHeart className="text-2xl text-[#0D6EFD]" />
        )}
      </div>
    </div>
  </div>
  )
}
