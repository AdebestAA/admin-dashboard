"use client"
import React from 'react'
import {User} from "lucide-react"
import Image from 'next/image'
const Profile = () => {
  return (
    <div className='w-[95%] mx-auto flex flex-col my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-2'>
        <div className='flex items-center'>
        <User className='text-blue' size={20}/>
<h1 className='text-[1rem] md:text-[1.1rem] font-semibold ml-2'>Profile</h1>
        </div>

<div className='flex justify-between w-full mt-2'>
    <aside className='flex gap-x-2 items-center'>
    <figure className='mdsm:w-[50px] mdsm:h-[50px] h-[40px] w-[40px] relative'>
        <Image src={"/ade.jpg"} className='rounded-full object-fit absolute ' fill alt='profil pix' />
    </figure>
    <div>
        <h1 className='text-text dark:text-Dtext md:text[1rem] text-[0.9rem]'>Ade Adebest</h1>
        <p className='text-Dgray md:text[1rem] text-[0.9rem]'>aadebesta@gmail.com</p>
    </div>
    </aside>
<button className='bg-blue rounded-lg h-10 md:h-12 px-2 hover:opacity-70 cursor-pointer text-white font-semibold'>Edit Profile</button>
</div>
        </div>
  )
}

export default Profile