import React from "react";
import { Button } from "../ui/button";
import {
  HomepageBanner,
  HomepageBanner2,
  Avatar,
} from "../../assets/images/z-index";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

export default function HomePageBanner() {
  return (
    <div className="bg-white rounded-lg lg:p-3 flex gap-4 w-full h-[250px] md:h-[400px]">
      {/* sidebar */}
      <div className="hidden lg:block">
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
      </div>

      {/* Image */}
      <div className="w-full bg-indigo-400 relative rounded-md">
        <Carousel >
          <img className="h-full w-full" src={HomepageBanner} alt="fefe" />
          <img className="h-full w-full" src={HomepageBanner2} alt="fefe" />
          <img
            className="h-full w-full"
            src="https://plus.unsplash.com/premium_photo-1693243851640-b1716891f7b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="fefe"
          />
          <img
            className="h-full w-full"
            src="https://plus.unsplash.com/premium_photo-1708512215706-ae6ce650b5d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="fefe"
          />
        </Carousel>
        <div className="h-[20%] w-[60%] md:p-8 p-4 absolute top-0">
          <div>
            <h3 className="md:text-2xl text-lg text-white font-thin">Latest trending</h3>
            <h2 className="md:text-3xl text-xl text-white font-bold">Electronic items</h2>
            <Link to="#">
              <Button className="bg-white hidden md:block hover:text-white text-black md:my-6 mt-3">
                Learn More
              </Button>
            </Link>
            <Link to="/homepage/blogs" className="text-indigo-500 text-lg hover:text-indigo-900 block md:hidden">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="w-[230px] flex flex-col gap-1 rounded-lg ">
          <div className="w-full p-1 bg-[#E3F0FF] flex flex-col gap-1 rounded-md">
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
          <div className="bg-[#F38332] py-2 pl-3 pr-8 text-white rounded-lg">
            <p className="text-[20px] min-h-[95px]">
              Get US $10 off with a new supplier
            </p>
          </div>

          {/* Quote */}
          <div className="bg-[#55BDC3] py-2 pl-4 pr-8 text-white rounded-lg">
            <p className="text-[20px] min-h-[95px]">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
