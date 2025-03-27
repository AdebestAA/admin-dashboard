
import {  statsType } from "./types";
import { GoContainer } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { PiBatteryVerticalLow } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";

export const productStats:statsType[] = [
       {
        id:1,
        name:"Total Products",
        value:720,
        icon:GoContainer
       },
       {
        id:2,
        name:"Hot Selling Goods",
        value:201,
        icon:GrLineChart
       },
       {
        id:3,
        name:"Low Stock",
        value:6,
        icon:PiBatteryVerticalLow
       },
       {
        id:4,
        name:"total Revenue",
        value:106000,
        icon:MdOutlineAttachMoney
       },
]