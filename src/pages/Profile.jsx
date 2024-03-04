import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = false;
  } else {
    screenColWidth = true;
  }
  return screenColWidth;
}

export default function Profile() {
  let location = useLocation();
  console.log(location.pathname);

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
          <h3 className="font-bold text-center">Profile</h3>
          <div>{""}</div>
        </header>
      )}
      <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
          {/* image */}
          <div className=" flex justify-center items-center">
            <svg
              className="relative left-16"
              xmlns="http://www.w3.org/2000/svg"
              width="119"
              height="179"
              viewBox="0 0 119 179"
              fill="none"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M87.7643 175.529C144.811 157.244 103.854 136.235 103.854 87.7643C103.854 39.2934 136.235 0 87.7643 0C39.2934 0 0 39.2934 0 87.7643C0 136.235 30.7175 193.813 87.7643 175.529Z"
                fill="#F8B64C"
              />
            </svg>
            <svg
              className="relative "
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.8889 23.1111C28.8889 16.9817 31.3238 11.1033 35.658 6.76909C39.9921 2.43491 45.8706 0 52 0C58.1294 0 64.0079 2.43491 68.342 6.76909C72.6762 11.1033 75.1111 16.9817 75.1111 23.1111C75.1111 29.2406 72.6762 35.119 68.342 39.4531C64.0079 43.7873 58.1294 46.2222 52 46.2222C45.8706 46.2222 39.9921 43.7873 35.658 39.4531C31.3238 35.119 28.8889 29.2406 28.8889 23.1111ZM28.8889 57.7778C21.2271 57.7778 13.8791 60.8214 8.46136 66.2391C3.04364 71.6569 0 79.0049 0 86.6667C0 91.2637 1.82619 95.6726 5.07682 98.9232C8.32745 102.174 12.7362 104 17.3333 104H86.6667C91.2637 104 95.6726 102.174 98.9232 98.9232C102.174 95.6726 104 91.2637 104 86.6667C104 79.0049 100.956 71.6569 95.5386 66.2391C90.1209 60.8214 82.7729 57.7778 75.1111 57.7778H28.8889Z"
                fill="#0A74FF"
              />
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              You don’t have account :)
            </h2>
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
