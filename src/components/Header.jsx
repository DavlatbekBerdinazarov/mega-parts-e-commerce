import { megapartsLogo } from "../assets/images/z-index";
import { Input } from "./ui/input";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AllCategoryDropdown } from "./ui-components/AllCategoryDropdown";
import { Button } from "./ui/button";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
export default function Header() {
  return (
    <div>
      <div className="md:container  sm:px-4 px-1">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center md:gap-6 sm:gap-2">
            <div className="block lg:hidden">
              <FaBars className="text-xl"/>
            </div>
            <img
              src={megapartsLogo}
              className="mr-3 w-[200px]"
              alt="Flowbite React Logo"
            />{" "}
          </div>
          {/* Input */}
          <div className="hidden lg:block">
            <form className="w-full border-2 border-indigo-500 flex justify-between rounded-lg focus:p-0">
              <Input
                className="min-w-[270px] rounded-sm focus:border-none border-2 border-indigo-500"
                type="text"
                placeholder="Search"
              />
              <AllCategoryDropdown />
              <Button type="submit" className="bg-indigo-500 w-[170px]">
                Search
              </Button>
            </form>
          </div>
          {/* profile and other pages */}

          <div className="flex items-center justify-around gap-3 md:gap-4 text-[#8B96A5]">
            <a
              href="#"
              className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
            >
              <FaUser />
              <p className="hidden lg:block text-[12px]">Profile</p>
            </a>
            <div className="hidden lg:block ">
              <a
                href="#"
                className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
              >
                <FaHeart />
                <p className=" text-[12px]">My orders</p>
              </a>
            </div>
            <a
              href="#"
              className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
            >
              <FaShoppingCart />
              <p className="hidden lg:block text-[12px]">My cart</p>
            </a>
          </div>
        </div>

        {/* Input */}
        <div className="block lg:hidden">
          <form action="" className="flex">
            <div className="flex w-full h-full items-center gap-2 px-2 bg-white border-2 border-slate-400 mx-2 focus:border-indigo-500 rounded-md">
              <span className="text-2xl text-slate-400">
                <IoMdSearch />
              </span>{" "}
              <input
                className="h-10 w-full border-none focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <Button className="hidden sm:block text-lg">Search</Button>
          </form>
        </div>

        {/* Secondary navbar using */}
        <div className="w-full py-2 flex flex-wrap gap-x-3 border-y-2 border-[1px] ">
          <Button variant="outline" className="p-2 hidden lg:block">
            <FaBars className="text-xl" />
          </Button>
          <Button variant="outline">All Category</Button>
          <Button variant="outline">Shock Absorbes</Button>
          <Button variant="outline">Brake discs</Button>
          <Button variant="outline">Spark Plugs</Button>
          <Button variant="outline">Oil Filters</Button>
        </div>
      </div>
    </div>
  );
}
