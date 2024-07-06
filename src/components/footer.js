import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#EA4E44]/5 py-16 md:py-32 min-[1200px]:py-36  grid grid-rows-2 sm:gap-y-0 gap-y-4 sm:grid-rows-1 sm:grid-cols-12 w-full px-10">
    <div className="relative sm:col-span-1 col-span-4 sm:row-span-1 row-span-2 flex items-start justify-center">
      <Image src="/images/bubu.svg" className="rotate-12 cursor-pointer hover:rotate-0 invert ease-in-out duration-200" width={35} height={35} />
    </div>
    <div className="sm:col-span-4 col-span-9 flex flex-col justify-center gap-8">
      <p className="text-[28px] leading-tight sm:text-3xl">I'm Jermaine - a software engineer based in Accra & London</p>
      <button className="px-10 py-4 w-fit bg-black text-white rounded-lg">Email me</button>
      <p className="text-base text-slate-600 flex items-center sm:gap-1 gap-3">
        <span className="underline">Time Machine</span>
        <span className="text-xs font-normal text-slate-400">•</span>
        <span>Built by maine</span>
        <span className="text-xs font-normal text-slate-400">•</span>
        <span>©2024 to ∞</span>
      </p>
    </div>
    <div className="sm:col-span-6 col-span-12 !mt-12 sm:mt-0 flex flex-col items-end justify-start sm:justify-end">
      <p className="text-4xl text-right italic">"Do everything in love".</p>
      <p className="text-lg italic">1 Corinthians 16:14</p>
    </div>
  </div>
  )
}

export default Footer