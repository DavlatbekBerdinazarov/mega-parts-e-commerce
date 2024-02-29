import { megapartsLogo, appstore, googleplay } from "../assets/images/z-index";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Footer() {
  return (
    <div>
      <div className="min-h-[324px] w-full bg-white ">
        <div className="md:container sm:px-4 px-1 py-[41px] flex flex-wrap justify-between">
          {/* main logo */}
          <div className="w-[276px]">
            <img src={megapartsLogo} alt="megaparts logo" />
            <p className="mt-[44px] mb-6 text-[#505050]">Best information about the company gies here but now lorem ipsum is</p>
            {/* social logos  */}
            <div className="flex gap-2">
              <a href="#" className="h-8 w-8 bg-[#BDC4CD] rounded-full flex items-center justify-center">
                <FaFacebook className="text-white text-xl"/>
              </a>
              <a href="#" className="h-8 w-8 bg-[#BDC4CD] rounded-full flex items-center justify-center">
                <FaTwitter className="text-white text-xl"/>
              </a>
              <a href="#" className="h-8 w-8 bg-[#BDC4CD] rounded-full flex items-center justify-center">
                <FaLinkedin className="text-white text-xl"/>
              </a>
              <a href="#" className="h-8 w-8 bg-[#BDC4CD] rounded-full flex items-center justify-center">
                <LuInstagram className="text-white text-xl"/>
              </a>
              <a href="#" className="h-8 w-8 bg-[#BDC4CD] rounded-full flex items-center justify-center">
                <FaYoutube className="text-white text-xl"/>
              </a>
            </div>
          </div>

          {/* About */}
          <div className="hidden md:block">
            <h3 className=" font-medium mb-3">About</h3>
            <div className="text-[#8B96A5] flex flex-col gap-1">
              <a href="#">About Us</a>
              <a href="#">Find store</a>
              <a href="#">Categories</a>
              <a href="#">Blogs</a>
            </div>
          </div>

          {/* Partnerships */}
          <div className="hidden md:block">
            <h3 className=" font-medium mb-3">Partnerships</h3>
            <div className="text-[#8B96A5] flex flex-col gap-1">
              <a href="#">About Us</a>
              <a href="#">Find store</a>
              <a href="#">Categories</a>
              <a href="#">Blogs</a>
            </div>
          </div>

          {/* Information */}
          <div className="hidden md:block">
            <h3 className=" font-medium mb-3">Information</h3>
            <div className="text-[#8B96A5] flex flex-col gap-1">
              <a href="#">Help Center</a>
              <a href="#">Money Refund</a>
              <a href="#">Shipping</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          {/* For users */}
          <div className="hidden md:block">
            <h3 className=" font-medium mb-3">For users</h3>
            <div className="text-[#8B96A5] flex flex-col gap-1">
              <a href="#">Login</a>
              <a href="#">Settings</a>
              <a href="#">Register</a>
              <a href="#">My orders</a>
            </div>
          </div>

          {/* Get app */}
          <div>
            <h3 className=" font-medium mb-3">Get app</h3>
            <div className="text-[#8B96A5] flex flex-col gap-1">
              <a href="#">
                <img className="rounded-md" src={appstore} alt="appstore logo" />
              </a>
              <a href="#">
                <img className="rounded-md" src={googleplay} alt="googleplay logo" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="h-[68px] bg-[#EFF2F4]">
        {/* Second footer */}
        <div className="md:container sm:px-4 px-1 h-full flex items-center justify-between">
        <p>© 2023 Ecommerce. </p>    
        <Select className="">
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="us" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">uzb</SelectItem>
              <SelectItem value="banana">rus</SelectItem>
              <SelectItem value="blueberry">eng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>    
        </div>
      </div>
    </div>
  );
}
