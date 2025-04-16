import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


const DangerZone = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col  my-4 bg-[#620f0f]  border-[#ff0c0c]  border-[1px] rounded-lg py-4 px-4"    
    >
        <div className='flex items-center'>
        <MdDeleteOutline className='text-[#e30000]' size={18}/>

<h1 className='text-[1rem] text-[#e30000] md:text-[1.1rem] font-semibold ml-2'> DangerZone</h1>
        </div>
       <p className='text-[#e30000] my-2'>Delete your account and all associated content permanently.</p>
       <button className='bg-[#e30000] rounded-lg h-10 md:h-12 mdsm:max-w-[160px] px-2 hover:opacity-70 cursor-pointer text-white font-semibold'>Delete Account</button>
        </div>
  )
}

export default DangerZone