"use client"
import React from 'react'
import {Lock} from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import { appDispatch, RootState } from '@/store'

import { activate, deactivate } from '@/store/slices/SecuritySlice'

const Security = () => {
  const dispatch = useDispatch<appDispatch>()
const securityState = useSelector((state:RootState)=>{
 return state.security
})
  return (
    <div className="w-[95%] mx-auto flex flex-col  my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-4"    
    >
         <div className='flex items-center'>
        <Lock className='text-blue' size={18}/>
<h1 className='text-[1.1rem] font-semibold ml-2'>Security</h1>
        </div>
        <div>
    {securityState.length > 0 && securityState.map((item,index)=>{

return (
    <section className="flex justify-between my-2 py-4" key={index}>
        <p>{item.name}</p>
            <button
              onClick={()=> {
                
                
                if (item.status) {
                    dispatch(deactivate(item.name))
                  }
                  else{
                    
                    dispatch(activate(item.name))
                }
              }}
              className={`w-12 h-6 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300 ${
                item.status ? "bg-blue" : "bg-gray"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  item.status ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
        
    </section>
)
    })}
</div>
<button className='bg-blue rounded-lg h-10 md:h-12 mdsm:max-w-[160px] px-2 hover:opacity-70 cursor-pointer text-white font-semibold'>Change Password</button>
        </div>
  )
}

export default Security