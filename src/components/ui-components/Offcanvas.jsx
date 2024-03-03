import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { TbWorld } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { Avatar } from "@/assets/images/z-index";
import { Link } from "react-router-dom";

export function DrawerOffcanvas() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div onClick={openDrawer}>
        <FaBars className="text-xl" />
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className=" fixed left-0 top-0 h-screen z-50 bg-[#f7fafc]"
      >
        <div className="mb-6 flex justify-between bg-[#EFF2F4] p-4">
          <Typography variant="h5" className="">
            <img src={Avatar} alt="" />
            <div className="mt-4 font-thin">
              <Link to="/">Sign in </Link> |{" "}
              <Link to="/register">Register</Link>
            </div>
          </Typography>
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-300 animate-pulse">
            <IoMdClose className="text-2xl" onClick={closeDrawer} />
          </div>
        </div>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <ListItem>
            <Link className="flex gap-1" to="#">
              <ListItemPrefix>
                <IoHomeOutline className="text-lg relative -top-[2px]" />
              </ListItemPrefix>
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1" to="#">
              <ListItemPrefix>
                <MdFormatListBulleted className="text-lg relative -top-[1px]" />
              </ListItemPrefix>
              Categories
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1" to="">
              <ListItemPrefix>
                <CiHeart className="text-lg relative -top-[0px]" />
              </ListItemPrefix>
              Favorites
            </Link>
            <ListItemSuffix>
              <Chip
                value="5"
                size="sm"
                color="green"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1" to="/homepage/orders">
              <ListItemPrefix>
                <TfiBag className="text-lg relative -top-[2px]" />
              </ListItemPrefix>
              My orders
            </Link>
          </ListItem>
        </List>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <ListItem>
            <Link className="flex gap-1" to="#">
              <ListItemPrefix>
                <TbWorld className="text-lg relative -top-[1px]" />
              </ListItemPrefix>
              English
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1" to="#">
              <ListItemPrefix>
                <TfiHeadphoneAlt className="text-lg relative -top-[1px]" />
              </ListItemPrefix>
              Contact us
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1" to="#">
              <ListItemPrefix>
                <HiOutlineBuildingOffice2 className="text-lg relative -top-[2px]" />
              </ListItemPrefix>
              About
            </Link>
          </ListItem>
        </List>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            User Agrement
          </ListItem>
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            Partnership
          </ListItem>
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            Privicy Policy
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
