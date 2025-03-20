import { sideBarMenuTypes } from "./types";

import { FiBarChart2 } from "react-icons/fi";
import { LiaSellcast } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";


export const SideBarMenu : sideBarMenuTypes [ ] = [
    {
        id:1,
        name:"Overview",
        icon: FiBarChart2
    },
    {
        id:2,
        name:"Products",
        icon: FiShoppingBag
    },
    {
        id:3,
        name:"users",
        icon:LuUsers 
    },
    {
        id:4,
        name:"Sales",
        icon: LiaSellcast
    },
    {
        id:5,
        name:"Orders",
        icon:  MdOutlineShoppingCart
    },
    {
        id:6,
        name:"Analytics",
        icon: IoAnalytics
    },
    {
        id:7,
        name:"Analytics",
        icon: CiSettings 
    },
]