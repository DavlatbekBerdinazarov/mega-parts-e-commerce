import { megapartsLogo } from "../assets/images/z-index";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
// import { button } from "./ui/button";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

import { Button } from "./ui/button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";

import { Listbox } from "@headlessui/react";
import { ShoppingCartContext } from "@/layout/MainLayout";
import { OffcanvasContext } from "@/layout/AppLayaut";
import { AllCategoryDropdown } from "./ui-components/AllCategroyDropdown";
import { HelpDropdown } from "./ui-components/HelpDropdown";
const featured = [
  { id: 1, name: "usd", unavailable: false },
  { id: 2, name: "uzs", unavailable: false },
  { id: 3, name: "euro", unavailable: false },
];

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [selectedFeatured, setSelectedFeatured] = useState(featured[0]);

  const { cartData} = useContext(ShoppingCartContext);
  const { setOpen } = useContext(OffcanvasContext)

  // screen width for swipper
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  let blogsPath =
    location.pathname == "/homepage/blogs/" ||
    location.pathname == "/homepage/blogs";

  let isTrue = profilePath || ordersPath || mycartPath || blogsPath;

  return (
    <>
      <div
        className={isTrue && !screenColWidth ? `hidden w-full` : `block w-full`}
      >
        <div className=" fixed top-0 bg-white z-40 w-full shadow-sm">
          <div className="md:container lg:px-12 px-[15px] flex justify-between items-center py-3">
            <div className="flex items-center md:gap-6 gap-2">
              <div className="block lg:hidden">
                <div onClick={() => setOpen(true)}>
                  <FaBars className="text-xl" />
                </div>
              </div>
              <Link to="/homepage">
                <img
                  src={megapartsLogo}
                  className="mr-3 w-[230px] "
                  alt="Flowbite React Logo"
                />
              </Link>{" "}
            </div>
            {/* Input */}
            {!isTrue && (
              <div className="hidden lg:block">
                <div className=" w-full max-h-[40px] border-2 pl-3 border-indigo-500 flex items-center justify-between rounded focus:p-0">
                  <input
                    className="min-w-[260px] border-none focus:outline-none h-[20px] rounded-none"
                    type="text"
                    placeholder="Search"
                  />
                  {/* All category dropdown */}
                  <AllCategoryDropdown/>

                  <Button
                    type="submit"
                    className=" bg-[#2563EB] w-[100px] rounded-none"
                  >
                    Search
                  </Button>
                </div>
              </div>
            )}
            {/* profile and other pages */}

            <div className="flex relative lg:top-2 items-center justify-around gap-3 md:gap-4 text-[#8B96A5]">
              <Link
                to="/homepage/profile"
                className="flex flex-col justify-center text-xl items-center hover:text-indigo-500"
              >
                <FaUser />
                <p className="hidden lg:block text-[10px]">Profile</p>
              </Link>
              <div className="hidden lg:block ">
                <Link
                  to="/homepage/orders"
                  className="flex flex-col justify-center text-xl items-center hover:text-indigo-500"
                >
                  <FaHeart />
                  <p className=" text-[10px]">My orders</p>
                </Link>
              </div>
              <Link
                to="/homepage/mycart"
                className="flex flex-col justify-center text-xl items-center hover:text-indigo-500"
              >
                <div className="relative">
                  <FaShoppingCart />
                  {cartData.length > 0 && (
                    <div className=" h-4 w-4 absolute -top-[1px] left-[15px] rounded-full bg-red-500 text-white text-[13px] flex items-center justify-center mt-[2px] font-semibold">
                      {cartData.length}
                    </div>
                  )}
                </div>
                <p className="hidden lg:block text-[10px]">My cart</p>
              </Link>
            </div>
          </div>

          {/* Input */}
          {!isTrue && (
            <div className="block lg:hidden md:container lg:px-12 px-[15px]">
              <form className="flex justify-start">
                <div className="flex w-full h-full sm:justify-between items-center gap-4 px-2 bg-white border-2 border-slate-400 focus:border-indigo-500 rounded-lg active:text-indigo-300">
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
            <div className="hidden sm:block border-y-[1px]">
              <div className="md:container lg:px-12 px-[15px] w-full py-2 flex items-center justify-between flex-wrap gap-x-3 ">
                <div className="flex items-center gap-x-3">
                  <Link className=" hidden lg:block">
                    <FaBars className="text-xl text-black" />
                  </Link>
                  <Link className="p-2 lg:hidden border-[1px] border-[#DEE2E7] h-8 flex items-center  ">
                    Catalog
                  </Link>
                  <Link to="">All Category</Link>
                  <Link to="shock-absorbes">Absorbes</Link>
                  <Link to="#">Discs</Link>
                  <Link to="blogs">Blogs</Link>
                  <div> 
                    <HelpDropdown/>
                  </div>
                </div>
                <div>
                  <div className="flex items-center px-2 bg-white">
                    <h2 className="hidden md:block">Eng:</h2>
                    <div className="  z-30">
                      <Listbox
                        value={selectedFeatured}
                        onChange={setSelectedFeatured}
                      >
                        <Listbox.Button className="p-1 flex justify-around items-center gap-1">
                          {selectedFeatured.name}
                        </Listbox.Button>
                        <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                          {featured.map((featured) => (
                            <Listbox.Option
                              key={featured.id}
                              value={featured}
                              disabled={featured.unavailable}
                            >
                              {featured.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pruducts */}
          {!isTrue && (
            <div className=" sm:hidden flex items-center py-2">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={false}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Ipods
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Tablets
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Acustics
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="shock-absorbes"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Absorbes
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Parts
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Absorbes
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[700px] bg-[#EFF2F4] flex items-center justify-center rounded-sm"></SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
        <div className="h-[40px] w-full"></div>
        {!isTrue && <div className=" h-[84px] lg:h-[58px] w-full"></div>}
      </div>
    </>
  );
}
