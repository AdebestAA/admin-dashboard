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
        link:"/",
        icon: FiBarChart2
    },
    {
        id:2,
        name:"Products",
        link:"/products",
        icon: FiShoppingBag
    },
    {
        id:3,
        name:"Users",
        link:"/users",
        icon:LuUsers 
    },
    {
        id:4,
        name:"Sales",
        link:"/sales",
        icon: LiaSellcast
    },
    {
        id:5,
        name:"Orders",
        link:"/orders",
        icon:  MdOutlineShoppingCart
    },
    {
        id:6,
        name:"Analytics",
        link:"/analytics",
        icon: IoAnalytics
    },
    {
        id:7,
        name:"Settings",
        link:"/settings",
        icon: CiSettings 
    },
]