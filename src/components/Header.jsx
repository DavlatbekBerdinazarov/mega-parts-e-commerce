import { megapartsLogo } from "../assets/images/z-index";
import { Input } from "./ui/input";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AllCategoryDropdown } from "./ui-components/AllCategoryDropdown";
import { Button } from "./ui/button";
import { IoMdSearch } from "react-icons/io";
import { DrawerOffcanvas } from "./ui-components/Offcanvas";
import { Link, useLocation } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineArrowDropDown } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { DropdownMenuArrow } from "radix-ui";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

function calculateColumnCount(screenWidth) {
  let columnCount;
  if (screenWidth > 640) {
    columnCount = 3;
  } else {
    columnCount = 2.8;
  }
  return columnCount;
}

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  let pathLocation =
    location.pathname == "/homepage" || location.pathname == "/homepage/"
      ? true
      : false;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // for swipper
  const columnCount = calculateColumnCount(screenWidth);

  const screenColWidth = calculatescreenColWidth(screenWidth);

  let profilePath =
    location.pathname == "/homepage/profile/" ||
    location.pathname == "/homepage/profile";

  let ordersPath =
    location.pathname == "/homepage/orders/" ||
    location.pathname == "/homepage/orders";

  let mycartPath =
    location.pathname == "/homepage/mycart/" ||
    location.pathname == "/homepage/mycart";

  let isTrue = profilePath || ordersPath || mycartPath;
  console.log("IStrue:", !isTrue);

  return (
    <>
      <div
        className={isTrue && !screenColWidth ? `hidden w-full` : `block w-full`}
      >
        <div className=" fixed top-0 bg-white z-40 w-full  shadow-lg">
          <div className="md:container lg:px-12 px-2 flex justify-between items-center py-3">
            <div className="flex items-center md:gap-6 gap-2">
              <div className="block lg:hidden">
                <DrawerOffcanvas />
              </div>
              <Link to="/homepage">
                <img
                  src={megapartsLogo}
                  className="mr-3 w-[200px]"
                  alt="Flowbite React Logo"
                />
              </Link>{" "}
            </div>
            {/* Input */}
            {!isTrue && (
              <div className="hidden lg:block">
                <div className="w-full max-h-[40px] border-2 pl-3 border-indigo-500 flex items-center justify-between rounded focus:p-0">
                  <input
                    className="min-w-[260px] border-none focus:outline-none h-[20px] rounded-none"
                    type="text"
                    placeholder="Search"
                  />
                  <AllCategoryDropdown />
                  <Button type="submit" className="bg-indigo-500 w-[100px] rounded-none">
                    Search
                  </Button>
                </div>
              </div>
            )}
            {/* profile and other pages */}

            <div className="flex items-center justify-around gap-3 md:gap-4 text-[#8B96A5]">
              <a
                href="/homepage/profile"
                className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
              >
                <FaUser />
                <p className="hidden lg:block text-[12px]">Profile</p>
              </a>
              <div className="hidden lg:block ">
                <a
                  href="/homepage/orders"
                  className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
                >
                  <FaHeart />
                  <p className=" text-[12px]">My orders</p>
                </a>
              </div>
              <a
                href="/homepage/mycart"
                className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
              >
                <FaShoppingCart />
                <p className="hidden lg:block text-[12px]">My cart</p>
              </a>
            </div>
          </div>

          {/* Input */}
          {!isTrue && (
            <div className="block lg:hidden md:container lg:px-12 px-2">
              <form className="flex ">
                <div className="flex w-full h-full justify-between items-center gap-4 px-2 bg-white border-2 border-slate-400 focus:border-indigo-500 rounded-md">
                  <span className="text-2xl text-slate-400">
                    <IoMdSearch />
                  </span>{" "}
                  <input
                    className="h-10 w-full border-none focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Search..."
                  />
                </div>
                <Button className="hidden sm:block text-lg">Search</Button>
              </form>
            </div>
          )}

          {/* Secondary navbar using */}
          {!isTrue && (
            <div className="hidden sm:block">
              <div className="md:container lg:px-12 px-2 w-full py-2 flex items-center flex-wrap gap-x-3 border-y-[1px]">
                <Link variant="outline" className="p-2 hidden lg:block">
                  <FaBars className="text-xl" />
                </Link>
                <Link to="/homepage">All Category</Link>
                <Link to="/homepage/shock-absorbes">Shock Absorbes</Link>
                <Link to="/homepage/brake-discs">Brake Discs</Link>

                <Link>Spark Plugs</Link>
                <Link>Oil Filters</Link>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="flex items-center">
                      Help <MdOutlineArrowDropDown />{" "}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="relative left-8">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}

          {/* Pruducts */}
          {!isTrue && (
            <div className="block sm:hidden">
              <Swiper
                className="mySwiper container w-full py-2 gap-4 flex flex-wrap border-y-[1px]"
                slidesPerView={columnCount}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
              >
                <SwiperSlide className="">
                  <Link to="/homepage">
                    <Button className="bg-slate-200 p-2 h-6 hover:text-white text-indigo-600">
                      All Category
                    </Button>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="">
                  <Link to="/homepage/shock-absorbes">
                    <Button className="bg-slate-200 p-2 h-6 hover:text-white text-indigo-600">
                      Shock Absorbes
                    </Button>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="">
                  <Link to="/homepage/brake-discs">
                    <Button className="bg-slate-200 p-2 h-6 hover:text-white text-indigo-600">
                      Brake Discs
                    </Button>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="">
                  <Link>
                    <Button className="bg-slate-200 p-2 h-6 hover:text-white text-indigo-600">
                      Oil Filters
                    </Button>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="">
                  <Link>
                    <Button className="bg-slate-200 p-2 h-6 hover:text-white text-indigo-600">
                      Spark pulgs
                    </Button>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
        <div className="h-[86px] w-full"></div>
        {!isTrue && <div className=" h-[84px] lg:h-[58px] w-full"></div>}
      </div>
    </>
  );
}
