"use client"
import PieChart from '@/components/OverViewComponents/PieChart'
import ProductLists from '@/components/ProductsPageComponents/ProductLists'
import ProductsStatsComponent from '@/components/ProductsPageComponents/ProductsStatsComponent'
import SalesTrend from '@/components/ProductsPageComponents/SalesTrend'
import React from 'react'

 const page = () => {
  return (
    <div className="mx-auto ">
      <ProductsStatsComponent/>
      <ProductLists/>
      <div className=' w-[95%] mx-auto flex flex-wrap mdsm:justify-between'>
        <SalesTrend/>
        <PieChart/>
      </div>
    </div>
  )
}
export default page