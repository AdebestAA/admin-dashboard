"use client";
import {Bell} from "lucide-react"
import ToggleButton from "../ToggleBtn";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Notification = () => {

const notificationState = useSelector((state:RootState)=>{

    return state.notification
})



  return (
    <div className="w-[95%] mx-auto flex flex-col  my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-4">
            <div className='flex items-center'>
        <Bell className='text-blue' size={18}/>
<h1 className='text-[1.1rem] font-semibold ml-2'>Notification</h1>
        </div>

<div>
    {notificationState.length > 1 && notificationState.map((item,index)=>{

return (
    <section className="flex justify-between my-2 py-4" key={index}>
        <p>{item.name}</p>
        <ToggleButton name={item.name} status={item.status} />
    </section>
)
    })}
</div>
    </div>
  )
}

export default Notification