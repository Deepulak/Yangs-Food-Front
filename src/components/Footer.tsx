import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative lg:top-20 md:h-24 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between'>
        <Link href="/" className='flex font-bold text-xl'>Yang’s Authentic Food</Link>
        <table className='text-center justify-between flex flex-col gap-3 sm:flex sm:flex-col sm:space-x-5 sm:justify-between'>
          <tr className='sm:top-20 font-bold text-xl'>Our Outlet</tr>
          <td>Gulshan 2 1285484</td>
          <td>Banani 1285484</td>
          <td>Mohakhali 1285484</td>
        </table>
        <div className='flex flex-col'>
          <p>©️ALL RIGHTS RESERVED.</p>
          <p className='font-bold uppercase text-xl'>@Decoder Corp</p>
        </div>
        
    </div>
  )
}

export default Footer