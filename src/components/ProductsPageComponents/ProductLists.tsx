"use client"
import { productsListType } from '@/utils/types';
import React, { useRef } from 'react'
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

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
  return (
    <div className='w-[95%]  mx-auto my-16  rounded-lg border-[1px] px-2 py-2'>
        <header className='flex justify-between text-sm'>
            <h1>Products List</h1>
           <aside className='flex items-center active-red bg-hover border-[2px] rounded-md border-gray'>
            <span className='p-[4px] '><FiSearch /></span>
            <input type="text" className='bg-border outline-none' ref={inputRef} />
            </aside>
        </header>
        <div className='overflow-x-scroll  max-w-full scrollClass py-4 ' >
            <header className='flex justify-between text-sm w-[1000px] uppercase border-b-[1px] border-border font-semibold'>
                <span className='min-w-[200px]'>name</span>
                <span className='min-w-[150px]'>category</span>
                <span className='min-w-[150px]'>price</span>
                <span className='min-w-[150px]'>available</span>
                <span className='min-w-[150px]'>sold</span>
                <span className='min-w-[150px]'>actions</span>
            </header>
            <section className='space-y-2 my-2'>
                {products.map((item:productsListType,index:number)=>{
return <aside key={index} className='flex text-sm justify-between w-[1000px] border-b-[1px] border-border'>
    <span className='min-w-[200px]'>{item.name}</span>
    <span className='min-w-[150px]'>{item.category}</span>
    <span className='min-w-[150px]'>${item.price}</span>
    <span className='min-w-[150px]'>{item.available}</span>
    <span className='min-w-[150px]'>{item.sold}</span>
    <div className='flex min-w-[150px] gap-x-2'>
        <CiEdit className='text-orange cursor-pointer'/>
        <MdDeleteOutline className='text-red cursor-pointer'/>
    </div>
</aside>

                })}
            </section>

        </div>
    </div>
  )
}

export default ProductLists