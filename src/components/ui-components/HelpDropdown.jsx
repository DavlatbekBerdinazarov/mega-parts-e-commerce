import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoMdArrowDropdown } from "react-icons/io";

export function HelpDropdown() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu
      className="w-8"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className="bg-white h-[35px] flex items-center justify-center rounded-none capitalize text-md font-thin text-dark">
          Help <IoMdArrowDropdown />
        </Button>
      </MenuHandler>
      <MenuList >
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
