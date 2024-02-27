import {
  detailsLoginRegister,
  megapartsLogo,
  mobileDetails,
} from "../assets/images/z-index";
import { Input } from "./ui/input";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AllCategoryDropdown } from "./ui-components/AllCategoryDropdown";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between py-4 pr-[170px] pl-[120px]">
        <div href="https://flowbite-react.com">
          <img
            src={megapartsLogo}
            className="mr-3 w-[200px]"
            alt="Flowbite React Logo"
          />{" "}
        </div>
        {/* Input */}
        <form  className="w-1/2 border-2 border-indigo-500 flex justify-between rounded-lg">
          <Input className="w-3/5 rounded-sm focus:border-none border-2 border-indigo-500" type="text" placeholder="Search" />
          <AllCategoryDropdown/>
          <Button type="submit" className="bg-indigo-500 w-[170px]">Search</Button>
        </form>
        {/* profile and other pages */}
  
        <div className="flex items-center justify-around gap-4 text-[#8B96A5]">
          <div className="flex flex-col justify-center items-center gap-1">
            <FaUser/>
            <p className=" text-[12px]">Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <MdMessage/>
            <p className=" text-[12px]">Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <FaHeart/>
            <p className=" text-[12px]">Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <FaShoppingCart/>
            <p className=" text-[12px]">Profile</p>
          </div>
        </div>
      </div>

      {/* Secondary navbar using */} 
      <div className="w-full py-2 px-[170px] flex gap-3 border-y-2 border-[1px] ">
        <Button variant="outline" className="p-2"><FaBars className="text-xl"/></Button>
        <Button variant="outline" >All Category</Button>
        <Button variant="outline" >Shock Absorbes</Button>
        <Button variant="outline" >Brake discs</Button>
        <Button variant="outline" >Spark Plugs</Button>
        <Button variant="outline" >Oil Filters</Button>
      </div>

    </div>
  );
}
