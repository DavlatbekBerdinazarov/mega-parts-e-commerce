import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = false;
  } else {
    screenColWidth = true;
  }
  return screenColWidth;
}

export default function Orders() {
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
    <div className="md:container lg:px-12 px-2 h-[100vh] md:h-[400px] flex flex-col justify-center">
      {screenColWidth && (
        <header className="flex px-3 justify-between items-center pt-8 fixed top-0 w-full">
          <Link to="/homepage">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold text-center">Orders</h3>
          <div>{""}</div>
        </header>
      )}
      <div>
        <div className="mb-16"></div>
        <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
          {/* image */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="183"
              height="179"
              viewBox="0 0 183 179"
              fill="none"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M87.7643 175.529C144.811 157.244 103.854 136.235 103.854 87.7643C103.854 39.2934 136.235 0 87.7643 0C39.2934 0 0 39.2934 0 87.7643C0 136.235 30.7175 193.813 87.7643 175.529Z"
                fill="#F8B64C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M167.044 52.6586H40.6638C31.7118 52.6586 24.8662 59.5042 24.8662 68.4562V142.178C24.8662 151.13 31.7118 157.976 40.6638 157.976H167.044C175.996 157.976 182.842 151.13 182.842 142.178V68.4562C182.842 59.5042 175.996 52.6586 167.044 52.6586Z"
                fill="#0A74FF"
              />
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M149.199 137.497C156.469 137.497 162.363 131.603 162.363 124.333C162.363 117.062 156.469 111.168 149.199 111.168C141.928 111.168 136.034 117.062 136.034 124.333C136.034 131.603 141.928 137.497 149.199 137.497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M137.498 137.497C144.768 137.497 150.662 131.603 150.662 124.333C150.662 117.062 144.768 111.168 137.498 111.168C130.227 111.168 124.333 117.062 124.333 124.333C124.333 131.603 130.227 137.497 137.498 137.497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74.8927 100.051H85.4244C87.0042 100.051 88.0573 101.105 88.0573 102.684C88.0573 104.264 87.0042 105.317 85.4244 105.317H74.8927C73.3129 105.317 72.2598 104.264 72.2598 102.684C72.2598 101.105 73.3129 100.051 74.8927 100.051Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.5636 100.051H59.0953C60.6751 100.051 61.7282 101.105 61.7282 102.684C61.7282 104.264 60.6751 105.317 59.0953 105.317H48.5636C46.9838 105.317 45.9307 104.264 45.9307 102.684C45.9307 101.105 46.9838 100.051 48.5636 100.051Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.5636 115.849H74.8929C76.4727 115.849 77.5258 116.902 77.5258 118.482C77.5258 120.062 76.4727 121.115 74.8929 121.115H48.5636C46.9838 121.115 45.9307 120.062 45.9307 118.482C45.9307 116.902 46.9838 115.849 48.5636 115.849Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M106.488 136.912H48.5636C46.9838 136.912 45.9307 135.859 45.9307 134.279C45.9307 132.7 46.9838 131.646 48.5636 131.646H106.488C108.068 131.646 109.121 132.7 109.121 134.279C109.121 135.859 108.068 136.912 106.488 136.912Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M111.754 105.317H101.223C99.643 105.317 98.5898 104.264 98.5898 102.684C98.5898 101.105 99.643 100.051 101.223 100.051H111.754C113.334 100.051 114.387 101.105 114.387 102.684C114.387 104.264 113.334 105.317 111.754 105.317Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Don’t have any order :)</h2>
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
    </div>
  );
}
