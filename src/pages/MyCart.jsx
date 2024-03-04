import React, { useEffect, useState } from "react";
import { iconCreditCard } from "@/assets/images/z-index";
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
    <div className="h-[100vh] md:h-[400px] flex flex-col justify-center px-2">
      {screenColWidth && (
        <header className="flex justify-between items-center pt-8 fixed top-0 w-full">
          <Link to="/homepage">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold text-center">Carts</h3>
          <div>{""}</div>
        </header>
      )}
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
  );
}
