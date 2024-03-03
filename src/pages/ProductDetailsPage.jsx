import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  return (
    <div className=" md:container lg:px-12 px-2">
      <header className="hidden text-[#8B96A5] md:flex flex-wrap gap-3 md:py-4 py-2">
        <Link to="/homepage" className="flex items-center gap-2">
          Home <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Shock Absorbes <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Gears <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Auto gears <FaAngleRight />
        </Link>
      </header>{" "}
      {/* Main product details */}
      <div>
        LOREM ISPUM
      </div>
      {/* /Main product details */}
    </div>
  );
}
