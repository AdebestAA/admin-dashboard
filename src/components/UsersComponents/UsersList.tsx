"use client"
import { productsListType, UsersListType } from '@/utils/types';
import React, { useEffect, useRef } from 'react'
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import gsap from 'gsap';

const users: UsersListType[] = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "role": "Admin",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "role": "Member",
      "status": "Inactive"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "role": "Member",
      "status": "Active"
    },
    {
      "id": 4,
      "name": "Diana Prince",
      "email": "diana.prince@example.com",
      "role": "Admin",
      "status": "Inactive"
    },
    {
      "id": 5,
      "name": "Ethan Hunt",
      "email": "ethan.hunt@example.com",
      "role": "Member",
      "status": "Active"
    },
    {
      "id": 6,
      "name": "Fiona Gallagher",
      "email": "fiona.gallagher@example.com",
      "role": "Member",
      "status": "Inactive"
    },
    {
      "id": 7,
      "name": "George Orwell",
      "email": "george.orwell@example.com",
      "role": "Admin",
      "status": "Active"
    }
  ]

const UsersListComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null)
        const listContainerRef = useRef<HTMLDivElement>(null)
  return (
     <div className='w-[95%] bg-white dark:bg-Dwhite mx-auto my-16  rounded-lg border-gray border-[1px] px-2 py-2' ref={listContainerRef}>
            <header className='flex justify-between text-sm' >
                <h1 className='font-semibold'>Products List</h1>
               <aside className='flex items-center active-red bg-hover border-[2px] rounded-md border-gray'>
                <span className='p-[4px] '><FiSearch className='text-text dark:text-black' /></span>
                <input type="text" className='bg-border dark:bg-Dborder outline-none' ref={inputRef} />
                </aside>
            </header>
            <div className='overflow-x-scroll  max-w-full scrollClass py-4 ' >
                <header className='flex justify-between text-sm min-w-[850px] uppercase border-b-[1px] border-border font-semibold'>
                    <span className='min-w-[200px]'>name</span>
                    <span className='min-w-[210px]'>email</span>
                    <span className='min-w-[150px]'>role</span>
                    <span className='min-w-[150px]'>status</span>
                    <span className='min-w-[150px]'>actions</span>
                </header>
                <section className='space-y-2 my-2'>
                    {users.map((item:UsersListType,index:number)=>{
    return <aside key={index} className={`${index % 2 == 0 ? "bg-border dark:bg-[#3e4248]" : ""} flex text-sm justify-between min-w-[850px] border-b-[1px] border-border`}>
        <span className='min-w-[200px] py-2 pl-2'>{item.name}</span>
        <span className='min-w-[210px] py-2  '>{item.email}</span>
        <span className='min-w-[150px] py-2 '>{item.role}</span>
        <span className={`min-w-[150px] py-2 ${item.status === "Active" ? "text-[green]" : "text-[red]"}`}>{item.status}</span>
        <div className='flex min-w-[150px] gap-x-2 py-2 pl-2'>
            <CiEdit className='text-orange cursor-pointer hover:opacity-60' size={18}/>
            <MdDeleteOutline className='text-red cursor-pointer hover:opacity-60' size={18}/>
        </div>
    </aside>
    
                    })}
                </section>
    
            </div>
        </div>
  )
}

export default UsersListComponent