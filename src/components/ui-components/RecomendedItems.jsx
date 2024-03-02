import React, { useRef, useState } from "react";
import { part1, part2, part3, part4 } from "@/assets/images/z-index";

export default function RecomendedItems() {
  return (
    <div className="w-full h-full md:p-2">
      <h1>Recommended Items</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-3 my-4 p-2 mx-auto w-full">
        <div className="h-[300px] rounded-sm bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        <div className="max-h-[300px] rounded-md bg-white border-[1px] border-slate-400 p-4 flex flex-col">
          <img className=" w-32 mx-auto min-h-42" src={part1} alt="part1" />
          <div className=" min-h-24 py-3">
            <p className=" font-semibold">Brake Disc for Damas </p>
            <p className=" text-slate-400">Damas scope</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
