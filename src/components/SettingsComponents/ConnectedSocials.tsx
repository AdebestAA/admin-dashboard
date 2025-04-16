"use client"

import { appDispatch, RootState } from "@/store"
import { connect, disconnect } from "@/store/slices/ConnectedSocialSlice"
import {BadgeHelp} from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

const ConnectedSocials = () => {
const dispatch = useDispatch<appDispatch>()
  const connectedSocialState = useSelector((state:RootState)=>{

    return state.connectedSocials
  })
  return (
    <div className="w-[95%] mx-auto flex flex-col  my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-4"    
    >
<div className='flex items-center'>
        <BadgeHelp className='text-blue' size={18}/>
<h1 className='text-[1.1rem] font-semibold ml-2'>Connected Socials</h1>
        </div>
        <div>
           {connectedSocialState.length > 0 && connectedSocialState.map((item,index)=>{
       
       return (
           <section className="flex justify-between my-2 py-2" key={index}>
               <p className="flex items-center">{item.name}</p>
                   <button
                     onClick={()=> {
                       
                       
                       if (item.connected) {
                           dispatch(disconnect(item.name))
                         }
                         else{
                           
                           dispatch(connect(item.name))
                       }
                     }}
                     className={`h-8  flex items-center cursor-pointer rounded-md px-2 py-4 transition-colors text-white duration-300 ${
                       item.connected ? "bg-green" : "bg-gray"
                     }`}
                   >
                 {item.connected ? "connected" : "connect"}
                   </button>
               
           </section>
       )
           })}
       </div>

    </div>
  )
}

export default ConnectedSocials