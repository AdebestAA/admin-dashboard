import { MdOutlineElectricBolt } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";

export const AnalyticsStats:{
    id: number;
    name: string;
    value: number | string;
    percentageGrowth:string,
    increased:boolean,
    icon: React.ElementType;
}[] = [
       {
        id:1,
        name:"Revenue",
        value:"1,536,468",
        percentageGrowth:"12.8",
        increased:true,
        icon:BiDollar
       },
       {
        id:2,
        name:"Users",
        value:"85,023",
        increased:true,
        percentageGrowth:"8.3",
        icon:LuUsers
       },
       {
        id:2,
        name:"Orders",
        value:432,
        increased:false,
        percentageGrowth:"4.0",
        icon:FiShoppingBag 

       },
       {
        id:2,
        name:"Page Views",
        value:"930,204",
        increased:false,
        percentageGrowth:"3.8",
        icon:FaRegEye
       },
]