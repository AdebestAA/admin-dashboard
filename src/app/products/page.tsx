import ProductLists from '@/components/ProductsPageComponents/ProductLists'
import ProductsStatsComponent from '@/components/ProductsPageComponents/ProductsStatsComponent'
import React from 'react'

 const page = () => {
  return (
    <div className="mx-auto ">
      <ProductsStatsComponent/>
      <ProductLists/>
    </div>
  )
}
export default page