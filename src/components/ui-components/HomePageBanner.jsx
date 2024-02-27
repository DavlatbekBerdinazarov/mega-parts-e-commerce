import React from "react";
import { Button } from "../ui/button";

import { HomepageBanner,HomepageBanner2, Avatar } from "../../assets/images/z-index";

import { Carousel } from "flowbite-react";

export default function HomePageBanner() {
  return (
    <div className="bg-white rounded-lg p-3 flex gap-4">
      {/* sidebar */}
      <ul className="w-[250px] flex flex-col gap-1 rounded-lg">
        <li className="w-full active-navbar p-2 rounded-md">Automobiles</li>
        <li className="w-full p-2 rounded-md">Piston</li>
        <li className="w-full p-2 rounded-md">Air Filters</li>
        <li className="w-full p-2 rounded-md">Radiator</li>
        <li className="w-full p-2 rounded-md">Engine</li>
        <li className="w-full p-2 rounded-md">Clutch</li>
        <li className="w-full p-2 rounded-md">Axle</li>
        <li className="w-full p-2 rounded-md">Staring Gear</li>
        <li className="w-full p-2 rounded-md">Brakes</li>
      </ul>

      {/* Image */}
      <div className="w-[60%] bg-indigo-400 relative">
        <Carousel leftControl="<" rightControl=">">
          <img className="h-full w-full" src={HomepageBanner} alt="fefe" />
          <img className="h-full w-full" src={HomepageBanner2} alt="fefe" />
          <img className="h-full w-full" src={HomepageBanner} alt="fefe" />
          <img className="h-full w-full" src={HomepageBanner2} alt="fefe" />
        </Carousel>
        <div className="h-full w-full p-8 absolute top-0 ">
          <div>
            <h3 className="text-2xl text-white font-thin">Latest trending</h3>
            <h2 className="text-3xl text-white font-bold">Electronic items</h2>
            <Button className="bg-white hover:text-white text-black my-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[230px] flex flex-col gap-2 rounded-lg ">
        <div className="w-full p-3 bg-[#E3F0FF] flex flex-col gap-2 rounded-md">
          <div className="flex gap-3 items-center">
            <div>
              <img className="w-12" src={Avatar} alt="avatar" />
            </div>
            <div>
              <h2 className="text-2xl">Hi, user</h2>
              <p>let's get started</p>
            </div>
          </div>
          <Button className="text-lg">Join now</Button>
          <Button variant="outline" className="text-lg text-indigo-500">
            Login
          </Button>
        </div>

        {/* Discount */}
        <div className="bg-[#F38332] py-3 pl-4 pr-8 text-white rounded-lg">
          <p className="text-[21px]">Get US $10 off with a new supplier</p>
        </div>

        {/* Quote */}
        <div className="bg-[#55BDC3] py-2 pl-4 pr-8 text-white rounded-lg">
          <p className="text-[21px]">Get US $10 off with a new supplier</p>
        </div>
      </div>
    </div>
  );
}
