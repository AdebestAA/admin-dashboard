"use client"
import { productsListType } from '@/utils/types';
import React, { useEffect, useRef } from 'react'
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import gsap from 'gsap';

const products:productsListType[] = [
    { id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronics", available: 25, sold: 75 },
    { id: 2, name: "Smartwatch", price: 129.99, category: "Wearables", available: 15, sold: 50 },
    { id: 3, name: "Mechanical Keyboard", price: 89.99, category: "Accessories", available: 30, sold: 120 },
    { id: 4, name: "Gaming Mouse", price: 49.99, category: "Accessories", available: 40, sold: 90 },
    { id: 5, name: "Portable Speaker", price: 79.99, category: "Audio", available: 20, sold: 60 },
    { id: 6, name: "4K Monitor", price: 299.99, category: "Computers", available: 10, sold: 25 },
    { id: 7, name: "USB-C Hub", price: 39.99, category: "Accessories", available: 50, sold: 150 },
  ];
const ProductLists = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const listContainerRef = useRef<HTMLDivElement>(null)



    useEffect(()=>{
if (!listContainerRef || !listContainerRef.current) {
    return
}
        gsap.fromTo(listContainerRef.current,
            {
              opacity:0,
              y:10
            },
            {
              opacity:1,
              y:0
            }
        )
    },[])
  return (
    <div className='w-[95%] bg-white dark:bg-Dwhite mx-auto my-16  rounded-lg border-gray border-[1px] px-2 py-2 opacity-0' ref={listContainerRef}>
        <header className='flex justify-between text-sm' >
            <h1 className='font-semibold'>Products List</h1>
           <aside className='flex items-center active-red bg-hover  border-[2px] rounded-md border-gray'>
            <span className='p-[4px] '><FiSearch className='text-text dark:text-black' /></span>
            <input type="text" className='bg-border dark:bg-Dborder outline-none' ref={inputRef} />
            </aside>
        </header>
        <div className='overflow-x-scroll  max-w-full scrollClass py-4 ' >
            <header className='flex justify-between text-sm min-w-[1000px] uppercase border-b-[1px] border-border font-semibold'>
                <span className='min-w-[200px]'>name</span>
                <span className='min-w-[150px]'>category</span>
                <span className='min-w-[150px]'>price</span>
                <span className='min-w-[150px]'>available</span>
                <span className='min-w-[150px]'>sold</span>
                <span className='min-w-[150px]'>actions</span>
            </header>
            <section className='space-y-2 my-2'>
                {products.map((item:productsListType,index:number)=>{
return <aside key={index} className={`${index % 2 == 0 ? "bg-border dark:bg-[#3e4248]" : ""} flex text-sm justify-between min-w-[1000px] border-b-[1px] border-border`}>
    <span className='min-w-[200px] py-2 pl-2'>{item.name}</span>
    <span className='min-w-[150px] py-2 pl-2'>{item.category}</span>
    <span className='min-w-[150px] py-2 pl-2'>${item.price}</span>
    <span className='min-w-[150px] py-2 pl-2'>{item.available}</span>
    <span className='min-w-[150px] py-2 pl-2'>{item.sold}</span>
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

export default ProductLists