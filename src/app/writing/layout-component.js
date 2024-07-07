'use client'
import Navbar from '@/components/navbar'
import { headingFont } from '@/fonts'
import React from 'react'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import Newsletter from '@/sections/homepage/Newsletter'
import Footer from '@/components/footer'
import moment from 'moment/moment'


const Layout = ({ children, meta }) => {
  return (
    <div className='flex flex-col items-center'>
      <head>

        <title>{`${meta.title} | Jermaine Antwi`}</title>
        <meta name="title" content={`${meta.title} | Jermaine Antwi`} />
        <meta name="description" content={meta.summary} />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codemaine.vercel.app" />
        <meta property="og:title" content={`${meta.title} | Jermaine Antwi`} />
        <meta property="og:description" content={meta.summary} />
        <meta property="og:image" content={`http://localhost:3000/api/og?title=${meta.title}`} />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codemaine.vercel.app" />
        <meta property="twitter:title" content={`${meta.title} | Jermaine Antwi`} />
        <meta property="twitter:description" content={meta.summary} />
        <meta property="twitter:image" content={`http://localhost:3000/api/og?title=${meta.title}`} />
      </head>
      <div className='bg-red-50 flex w-full flex-col items-center'>
        <Navbar dark fixed />
        <div className='flex mt-[7vh] sm:mt-[10vh] mb-[12vh] sm:mb-[15vh] flex-col gap-y-6 w-full sm:px-0 px-6 sm:w-3/5'>
          <h1 className={`text-[36px] md:text-[48px] min-[1200px]:text-[56px] leading-[1.15] ${headingFont.className} -mb-2`}>{meta.title ?? "No title"}</h1>
          <p className='text-[20px] md:text-[22px] min-[1200px]:text-2xl'>{meta.summary}</p>
          <div className='flex flex-row items-center gap-3'>
            <Image width={10} height={10} src="/images/pfp.jpg" unoptimized className='h-6 w-6 rounded-full' />
            <div className='flex flex-row gap-2 items-center'>
              <p className='text-lg text-slate-600'>Jul 7, 2024</p>
              <p className='-mt-[4px] text-slate-500'>·</p>
              <p className='text-lg text-slate-600'>{meta.minRead ?? 1} min read</p>
            </div>
          </div>
          <Image src='/images/gradient.jpeg' className='w-full mt-6 sm:mt-10 rounded-2xl h-auto aspect-video' width={500} height={90} />
        </div>
      </div>
      <div className='w-full sm:px-0 px-6 sm:w-3/5 pt-[3vh] sm:pt-[10vh]'>
        {children}
      </div>
      <Newsletter noTitle />
      <Footer />
    </div>
  )
}

export default Layout