import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";

import { FaArrowLeftLong } from "react-icons/fa6";

import { IoMdLock } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";

import {
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
} from "@/assets/images/z-index";
import { IoMdArrowDropdown } from "react-icons/io";
import RelatedProducts from "@/components/ProductDetails.jsx/RelatedProducts";
import CartItems from "@/components/MyCart.jsx/CartItems";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = false;
  } else {
    screenColWidth = true;
  }
  return screenColWidth;
}

const selectedProducts = [
  {
    id: 1,
    img: part1,
    title: "T-shirts with multiple colors, for men and lady ",
    desc: "Size: medium, Color: blue, Material: Plastic Seller: Artel Market",
  },
  {
    id: 2,
    img: part2,
    title: "Xiaomi Redmi 8 Original ",
    desc: "Size: medium, Color: blue, Material: Plastic Seller: Artel Market",
  },
  {
    id: 3,
    img: part3,
    title: "T-shirts with multiple colors, for men and lady",
    desc: "Size: medium, Color: blue, Material: Plastic Seller: Artel Market",
  },
];

export default function MyCart() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  return (
    <div
      className={`md:container lg:px-12 px-2 h-full ${
        !selectedProducts
          ? ` flex flex-col justify-center h-[100vh] md:h-[400px]`
          : ""
      }`}
    >
      <div className="w-full h-1"></div>
      {screenColWidth && (
        <header className="flex px-3 text-xl justify-between items-center pt-8 fixed top-0 w-full bg-gray-100 pb-2">
          <Link to="/homepage">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold text-center">Carts</h3>
          <div>{""}</div>
        </header>
      )}
      {!selectedProducts.length && (
        <div>
          <div className="w-full h-1 mb-28"></div>
          <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
              {/* image */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="169"
                  height="179"
                  viewBox="0 0 139 179"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M87.7643 175.529C144.811 157.244 103.854 136.235 103.854 87.7643C103.854 39.2934 136.235 0 87.7643 0C39.2934 0 0 39.2934 0 87.7643C0 136.235 30.7175 193.813 87.7643 175.529Z"
                    fill="#F8B64C"
                  />
                  <path
                    d="M32 53.5667C32 52.6207 32.3758 51.7135 33.0447 51.0447C33.7136 50.3758 34.6208 50 35.5668 50H46.2671C47.0627 50.0002 47.8354 50.2664 48.4623 50.7563C49.0892 51.2462 49.5343 51.9316 49.7269 52.7035L52.616 64.2667H135.437C135.96 64.2672 136.477 64.383 136.951 64.6059C137.425 64.8288 137.844 65.1533 138.179 65.5564C138.513 65.9595 138.754 66.4313 138.886 66.9382C139.017 67.4452 139.035 67.9748 138.939 68.4896L128.239 125.556C128.086 126.374 127.652 127.112 127.012 127.643C126.373 128.175 125.568 128.466 124.736 128.467H60.5342C59.7027 128.466 58.8975 128.175 58.258 127.643C57.6184 127.112 57.1846 126.374 57.0316 125.556L46.3384 68.5966L43.485 57.1333H35.5668C34.6208 57.1333 33.7136 56.7576 33.0447 56.0887C32.3758 55.4198 32 54.5126 32 53.5667ZM67.6678 128.467C63.8839 128.467 60.255 129.97 57.5794 132.645C54.9038 135.321 53.4007 138.95 53.4007 142.733C53.4007 146.517 54.9038 150.146 57.5794 152.821C60.255 155.497 63.8839 157 67.6678 157C71.4516 157 75.0805 155.497 77.7561 152.821C80.4317 150.146 81.9349 146.517 81.9349 142.733C81.9349 138.95 80.4317 135.321 77.7561 132.645C75.0805 129.97 71.4516 128.467 67.6678 128.467ZM117.603 128.467C113.819 128.467 110.19 129.97 107.514 132.645C104.839 135.321 103.336 138.95 103.336 142.733C103.336 146.517 104.839 150.146 107.514 152.821C110.19 155.497 113.819 157 117.603 157C121.387 157 125.015 155.497 127.691 152.821C130.367 150.146 131.87 146.517 131.87 142.733C131.87 138.95 130.367 135.321 127.691 132.645C125.015 129.97 121.387 128.467 117.603 128.467ZM67.6678 135.6C69.5597 135.6 71.3742 136.352 72.712 137.689C74.0498 139.027 74.8013 140.841 74.8013 142.733C74.8013 144.625 74.0498 146.44 72.712 147.777C71.3742 149.115 69.5597 149.867 67.6678 149.867C65.7758 149.867 63.9614 149.115 62.6236 147.777C61.2858 146.44 60.5342 144.625 60.5342 142.733C60.5342 140.841 61.2858 139.027 62.6236 137.689C63.9614 136.352 65.7758 135.6 67.6678 135.6ZM117.603 135.6C119.495 135.6 121.309 136.352 122.647 137.689C123.985 139.027 124.736 140.841 124.736 142.733C124.736 144.625 123.985 146.44 122.647 147.777C121.309 149.115 119.495 149.867 117.603 149.867C115.711 149.867 113.896 149.115 112.558 147.777C111.221 146.44 110.469 144.625 110.469 142.733C110.469 140.841 111.221 139.027 112.558 137.689C113.896 136.352 115.711 135.6 117.603 135.6Z"
                    fill="#0A74FF"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart empty :)</h2>
                <p className="text-[#868686]">
                  It’s seems like you have not login in to your account. You may
                  easily create account
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-[#0A74FF] border-[2px] w-[225px] border-[#0A74FF]"
            >
              Create account
            </Button>
          </div>
        </div>
      )}

      { selectedProducts.length > 0 && <div className=" w-full">
        {/* divider */}
        <div className="pt-[52px]"></div>

        <h1 className="my-2 text-xl md:text-2xl font-semibold">My cart (3)</h1>
        <div className=" w-full grid lg:grid-cols-5 gap-5 mb-6">
          {/* 1. */}
          <div className=" col-span-4 p-3 bg-white rounded-md border-[1px] border-[#DEE2E7]">
            {selectedProducts.map((element, index) => {
              return (
                <div key={element.id}>
                  <CartItems element={element}/>
                </div>
              );
            })}
            <div className="w-full flex flex-col gap-2 pb-3 border-b-[1px] border-[#DEE2E7]">
              <div className="flex text-xl justify-between">
                <span className="text-[#8B96A5]">Items ({selectedProducts.length}):</span>
                <span>{3*12 }$</span>
              </div>
              <div className="flex text-xl justify-between">
                <span className="text-[#8B96A5]">Shipping:</span>
                <span>32 $</span>
              </div>
              <div className="flex text-xl justify-between">
                <span className="text-[#8B96A5]">Tax:</span>
                <span>32 $</span>
              </div>
              <div className="flex text-xl justify-between font-semibold">
                <span className="text-xl">Total:</span>
                <span>123$</span>
              </div>
              <button className="w-full p-2 rounded text-white bg-green-500">Checkout ({selectedProducts.length}) items</button>
            </div>

            <div className="flex justify-between">
              <Link to="/homepage">
                <Button className="flex gap-2">
                  <FaArrowLeftLong/> Back to shop
                </Button>
              </Link>
              <Button variant="outline" className="text-indigo-500">
                Remove all
              </Button>
            </div>

          </div>

          <div className="bg-white w-[250px] md:col-span-1 p-3 h-28 rounded-md border-[1px] border-[#DEE2E7]">
            <h1>Have a cupon?</h1>
            <div className="w-full flex mt-2 justify-between border-[1px] border-[#DEE2E7] px-2  rounded-md">
              <input
                className="w-1/2 border-1 border-blue-500 focus-visible:outline-none"
                placeholder="type here.."
                type="text"
              />{" "}
              <button className="text-indigo-400 py-3 px-4 active:text-indigo-300 border-l-[2px]">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Custom services */}

        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex gap-2 my-3 md:my-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30 20H29V18C29 15.24 26.76 13 24 13C21.24 13 19 15.24 19 18V20H18C16.9 20 16 20.9 16 22V32C16 33.1 16.9 34 18 34H30C31.1 34 32 33.1 32 32V22C32 20.9 31.1 20 30 20ZM24 29C22.9 29 22 28.1 22 27C22 25.9 22.9 25 24 25C25.1 25 26 25.9 26 27C26 28.1 25.1 29 24 29ZM21 20V18C21 16.34 22.34 15 24 15C25.66 15 27 16.34 27 18V20H21Z"
                fill="#8B96A5"
              />
            </svg>
            <div>
              <h2>Secure payment</h2>
              <p className="text-[#A9ACB0]">Have you ever finally just </p>
            </div>
          </div>
          <div className="flex gap-2 my-3 md:my-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 15H16C14.9 15 14.01 15.9 14.01 17L14 35L18 31H32C33.1 31 34 30.1 34 29V17C34 15.9 33.1 15 32 15ZM19 22H29C29.55 22 30 22.45 30 23C30 23.55 29.55 24 29 24H19C18.45 24 18 23.55 18 23C18 22.45 18.45 22 19 22ZM25 27H19C18.45 27 18 26.55 18 26C18 25.45 18.45 25 19 25H25C25.55 25 26 25.45 26 26C26 26.55 25.55 27 25 27ZM29 21H19C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19H29C29.55 19 30 19.45 30 20C30 20.55 29.55 21 29 21Z"
                fill="#8B96A5"
              />
            </svg>
            <div>
              <h2>Customer support</h2>
              <p className="text-[#A9ACB0]">Have you ever finally just </p>
            </div>
          </div>
          <div className="flex gap-2 my-3 md:my-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.5 20H29V18C29 16.9 28.1 16 27 16H15C13.9 16 13 16.9 13 18V27C13 28.1 13.9 29 15 29C15 30.66 16.34 32 18 32C19.66 32 21 30.66 21 29H27C27 30.66 28.34 32 30 32C31.66 32 33 30.66 33 29H34C34.55 29 35 28.55 35 28V24.67C35 24.24 34.86 23.82 34.6 23.47L32.3 20.4C32.11 20.15 31.81 20 31.5 20ZM18 30C17.45 30 17 29.55 17 29C17 28.45 17.45 28 18 28C18.55 28 19 28.45 19 29C19 29.55 18.55 30 18 30ZM31.5 21.5L33.46 24H29V21.5H31.5ZM30 30C29.45 30 29 29.55 29 29C29 28.45 29.45 28 30 28C30.55 28 31 28.45 31 29C31 29.55 30.55 30 30 30Z"
                fill="#8B96A5"
              />
            </svg>
            <div>
              <h2>Free delivery</h2>
              <p className="text-[#A9ACB0]">Have you ever finally just </p>
            </div>
          </div>
        </div>

        <div>
          <RelatedProducts />
        </div>

        <div className="mb-5">
          <div className="hidden md:flex items-center justify-between w-full bg-[#237CFF] h-[120px] my-6 rounded-lg p-8 text-white">
            <div>
              <h1 className="text-2xl">Super discount on more than 100 USD</h1>
              <p className=" opacity-[0.7]">
                Have you ever finally just write dummy info
              </p>
            </div>
            {/* button */}
            <button className=" active:scale-[1.02] h-10 bg-[#FF9017] px-3 py-2 text-white rounded-lg">
              Shop now
            </button>
          </div>
        </div>

        <div className="w-full h-6"></div>
      </div>}
    </div>
  );
}
