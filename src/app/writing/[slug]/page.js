'use client'
import Navbar from '@/components/navbar'
import { headingFont } from '@/fonts'
import React from 'react'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import Newsletter from '@/sections/homepage/Newsletter'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-red-50 flex flex-col items-center'>
        <Navbar dark fixed />
        <div className='flex mt-[7vh] sm:mt-[10vh] mb-[12vh] sm:mb-[15vh] flex-col gap-y-6 w-full sm:px-0 px-6 sm:w-3/5'>
          <p className={`text-[36px] md:text-[48px] min-[1200px]:text-[56px] leading-[1.15] ${headingFont.className} -mb-2`}>The making of your favourite products.</p>
          <p className='text-[20px] md:text-[22px] min-[1200px]:text-2xl'>Step behind the curtain and discover the hidden intricacies of product creation, as I unveil the stories behind your beloved designs from a freelancer's perspective.</p>
          <div className='flex flex-row items-center gap-3'>
            <Image width={10} height={10} src="/images/pfp.jpg" unoptimized className='h-6 w-6 rounded-full' />
            <div className='flex flex-row gap-2 items-center'>
            <p className='text-lg text-slate-600'>Apr 8, 2024</p>
            <p className='-mt-[4px] text-slate-500'>·</p>
            <p className='text-lg text-slate-600'>5 min read</p>
            </div>
          </div>
          <Image src='/images/gradient.jpeg' className='w-full mt-6 sm:mt-10 rounded-2xl h-auto aspect-video' width={160} height={90} />
        </div>
        </div>
        <div className='w-full sm:px-0 px-6 sm:w-3/5 pt-[3vh] sm:pt-[10vh]'>
          <Markdown
          options={{
            overrides: {
              h2: {
                props: {
                  className: 'font-medium text-[36px] md:text-[48px] min-[1200px]:text-[56px] leading-tight font-medium mt-8 mb-4'
                }
              },
              p: {
                props: {
                  className: 'text-[20px] md:text-[22px] min-[1200px]:text-2xl'
                }
              }
            }
          }}>{`## Sketching the vision

Have you ever wondered what goes into creating the gadgets that make your life easier and more enjoyable? As a freelance product designer, I'm here to pull back the curtain and take you on a journey from the initial spark of inspiration to the final polished product. It all starts with a simple sketch, where ideas come to life on the blank canvas of my notebook.

## Refining the concept

From there, it's a whirlwind of refining concepts, prototyping, and collaborating with manufacturers to bring the design to fruition. But it's not just about turning sketches into tangible objects; it's about solving problems and enhancing user experiences. Each decision, from the choice of materials to the placement of buttons, is carefully considered to ensure that the end result is not only aesthetically pleasing but also functional and intuitive.

## The reward of creation

So the next time you marvel at a sleek new gadget, remember that behind its shiny exterior lies a story of creativity, dedication, and countless hours of hard work. And for me, that's the most rewarding part of being a freelance product designer — knowing that I've played a role in creating something that brings joy and convenience to people's lives.`}</Markdown>
        </div>
        <Newsletter noTitle />
        <Footer />
    </div>
  )
}

export default Page