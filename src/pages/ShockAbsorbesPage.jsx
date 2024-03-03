import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";

import { Button } from "@/components/ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";

import { MdWindow } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa";
import { Pagination } from "@/components/ui/pagination";
import { PaginationDemo } from "@/components/ShockAbsorbesComponents/ProductsPagination";
import FiltersView1 from "@/components/ShockAbsorbesComponents/FiltersView1";
import FiltersView2 from "@/components/ShockAbsorbesComponents/FiltersView2";
import RecommendedAlso from "@/components/ShockAbsorbesComponents/RecommendedAlso";

export default function ShockAbsorbesPage() {
  // active class
  const [activeFilterBtn, setActiveFilterBtn] = useState(false);
  // dropdown menu
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  useEffect(() => {
    console.log("rendering..");
  });
  // dropdown menu
  return (
    <div className=" md:container lg:px-12 px-2">
      <div>
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
        </header>

        <div className="grid grid-cols-4 grid-rows-1 gap-6">
          <figure className="hidden lg:block">
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-base gap-4">
                    <Link to="#" className="">
                      Brakes
                    </Link>
                    <Link to="#" className="">
                      Muffler
                    </Link>
                    <Link to="#" className="">
                      Stearing gear
                    </Link>
                    <Link to="#" className="">
                      Transmission
                    </Link>
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Cars */}
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Cars
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-base gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tico" />
                      <label
                        htmlFor="tico"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chevrolet Tico
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="matiz" />
                      <label
                        htmlFor="matiz"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chevrolet Matiz
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="damas" />
                      <label
                        htmlFor="damas"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chevrolet Damas
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gentra" />
                      <label
                        htmlFor="gentra"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chevrolet Gentra
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cobalt" />
                      <label
                        htmlFor="cobalt"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chevrolet Cobalt
                      </label>
                    </div>
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Other Products */}
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Other Products
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-base gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metallic" />
                      <label
                        htmlFor="metallic"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Metallic
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cover" />
                      <label
                        htmlFor="cover"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Plastic cover
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ram" />
                      <label
                        htmlFor="ram"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        8GB RAM
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="power" />
                      <label
                        htmlFor="power"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Super Power
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="memory" />
                      <label
                        htmlFor="memory"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Large Memory
                      </label>
                    </div>
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </figure>
          <figure className="col-span-4 lg:col-span-3 mb-3">
            <header className="bg-white p-3 rounded-md flex justify-between items-center">
              <div className="hidden lg:block">
                12,911 items in{" "}
                <span className="font-semibold">Mobile accessory</span>
              </div>
              {/* Responsive filters after lg */}
              <div className="flex gap-3 lg:hidden">
                  <Select>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Sort by.." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Newest</SelectItem>
                      <SelectItem value="dark">Name</SelectItem>
                      <SelectItem value="system">Cost</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Filter (3)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Newest</SelectItem>
                      <SelectItem value="dark">Name</SelectItem>
                      <SelectItem value="system">Cost</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
                {/* /Responsive filters after lg */}
              <div className="flex justify-between items-center space-x-2">
                <Checkbox className="hidden lg:block" id="verified" />
                <label
                  htmlFor="verified"
                  className="hidden lg:block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Verified only
                </label>
                {/* Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="hidden lg:flex items-end"
                    asChild
                  >
                    <Button variant="outline">
                      Featured <IoMdArrowDropdown />{" "}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-46">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                      disabled
                    >
                      Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Panel
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* /Dropdown */}

                <div className=" rounded-md flex gap-2 border-[1px] border-slate-200">
                  <div
                    onClick={() => setActiveFilterBtn((prev) => !prev)}
                    className={`py-2 pl-2 pr-1 ${
                      activeFilterBtn ? `bg-[#EFF2F4]` : ``
                    } `}
                  >
                    <MdWindow className="text-2xl active:scale-[1.1]" />
                  </div>
                  <div
                    onClick={() => setActiveFilterBtn((prev) => !prev)}
                    className={`py-2 pl-1 pr-2 ${
                      !activeFilterBtn ? `bg-[#EFF2F4]` : ``
                    } `}
                  >
                    <FaBars className="text-2xl active:scale-[1.1]" />
                  </div>
                </div>
              </div>
            </header>

            {/* Filtered buttons */}
            <div className=" flex gap-2 flex-wrap px-2">
              <button className="flex gap-1 p-1 text-sm items-center border-[2px] border-indigo-400 rounded-lg max-w-[200px]">
                <span>Brake Discs</span>
                <IoMdClose className="relative text-lg top-[1px]" />
              </button>
              <button className="flex gap-1 p-1 text-sm items-center border-[2px] border-indigo-400 rounded-lg max-w-[200px]">
                <span>Absorbes</span>
                <IoMdClose className="relative text-lg top-[1px]" />
              </button>
              <button className="flex gap-1 p-1 text-sm items-center border-[2px] border-indigo-400 rounded-lg max-w-[200px]">
                <span>Chevrolet Matiz</span>
                <IoMdClose className="relative text-lg top-[1px]" />
              </button>
              <button className="text-indigo-400 bg-none ">
                Clear all filter
              </button>
            </div>
            {/* /Filtered buttons */}

            {/* Gears */}
            <div>
              {!activeFilterBtn && <FiltersView1 />}
              {activeFilterBtn && <FiltersView2 />}
            </div>
            <div className="w-full flex justify-end">
              <PaginationDemo />
            </div>

            {/* You may also like */}
            <div className="block lg:hidden">
              <RecommendedAlso />
            </div>
            {/* /You may also like */}
            {/* /Gears */}
          </figure>
        </div>
      </div>
    </div>
  );
}
