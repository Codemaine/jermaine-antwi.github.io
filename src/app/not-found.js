'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { headingFont } from '@/fonts'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const NotFound = () => {
  return (
    <div>
    <div className='bg-red-50 h-[90vh] flex flex-col items-center'>
        <Navbar dark fixed />
        <div className='flex flex-col gap-12 h-full w-3/4 justify-center'>
        <p className={`${headingFont.className} text-[40px] md:text-[60px] min-[1200px]:text-[80px] leading-[0.96]`}>404<br/>Page not found</p>
        <button className="py-4 bg-black text-white rounded-lg w-44 justify-center flex flex-row items-center gap-1 text-center disabled:opacity-50">Go home <ArrowRight color='#fff' size={15} className='mt-0.5' /></button>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default NotFound