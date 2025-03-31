import { statsType } from "./types";
import { LuUsersRound } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
import { LuUserX } from "react-icons/lu";

export const usersStats:statsType[] = [
       {
        id:1,
        name:"Total Users",
        value:340232,
        icon:LuUsersRound 
       },
       {
        id:2,
        name:"New Users",
        value:1943,
        icon:LuUserPlus
       },
       {
        id:3,
        name:"Active Users",
        value:183954,
        icon:LuUserCheck
       },
       {
        id:4,
        name:"Unverified Users",
        value:2454,
        icon:LuUserX
       },
]