"use client";
import {Bell} from "lucide-react"
import ToggleButton from "../ToggleBtn";
const Notification = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-2">
            <div className='flex items-center'>
        <Bell size={20}/>
<h1 className='text-[1.2rem] font-semibold ml-2'>Profile</h1>
        </div>
        <ToggleButton/>
    </div>
  )
}

export default Notification