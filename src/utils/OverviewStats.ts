import { MdOutlineElectricBolt } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { statsType } from "./types";

export const OverViewStats:statsType[] = [
       {
        id:1,
        name:"Total Sales",
        value:15364,
        icon:MdOutlineElectricBolt
       },
       {
        id:2,
        name:"New users",
        value:823,
        icon:LuUsers
       },
       {
        id:2,
        name:"Total Products",
        value:432,
        icon:FiShoppingBag 

       },
       {
        id:2,
        name:"Conversion Rate",
        value:12.5,
        icon:FiBarChart2
       },
]