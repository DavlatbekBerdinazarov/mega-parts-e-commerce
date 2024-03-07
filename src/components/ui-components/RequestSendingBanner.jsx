import React from "react";
import { bannerRequest } from "@/assets/images/z-index";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Menu } from "@headlessui/react";

import { Button } from "../ui/button";

export default function RequestSendingBanner() {
  return (
    <div className="w-full h-[223px] lg:h-[446px] relative">
      <img className="h-full w-full" src={bannerRequest} alt="banner" />
      <div className="w-full h-full absolute top-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-4 lg:py-8 flex justify-between  rounded-lg">
        {/* content */}
        <div className="w-[440px] text-white">
          <h1 className="text-2xl md:text-3xl md:mb-2 mb-3 lg:my-3 font-semibold">
            An easy way to send requests to all suppliers
          </h1>
          <p className="text-md md:text-lg hidden md:block my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button type="submit block lg:hidden" className="w-[160px] text-lg">
            Send inquery
          </Button>
        </div>
        {/* form */}
        <div className="hidden lg:block w-2/5 max-h-[346px]">
          <form className=" bg-white w-full h-full rounded-md p-6 flex flex-col gap-4">
            <h1 className="font-bold text-xl">Send quote to suppliers</h1>
            <Input
              className=" rounded-sm  focus-visible:none"
              type="text"
              placeholder="What item you need?"
            />
            <Textarea
              className=" focus-visible:none"
              placeholder="type something"
            />
            <div className="flex gap-4 items-center">
              <Input
                className="w-1/2 rounded-sm  focus-visible:none"
                type="text"
                placeholder="What item you need?"
              />
              <div className="border-2 p-2 rounded-md">
                <Menu>
                  <Menu.Button>More</Menu.Button>
                  <Menu.Items className="absolute flex flex-col bg-white w-24 py-2">
                    {/* ... */}

                    {/* This item will be skipped by keyboard navigation. */}
                    <Menu.Item>
                      <span className="opacity-75">Invite</span>
                    </Menu.Item>
                    <Menu.Item disabled>
                      <span className="opacity-75">Invite</span>
                    </Menu.Item>
                    <Menu.Item disabled>
                      <span className="opacity-75">Invite</span>
                    </Menu.Item>

                    {/* ... */}
                  </Menu.Items>
                </Menu>
              </div>
            </div>

            {/* Button */}
            <Button type="submit" className="w-[160px] text-lg">
              Send inquery
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
