'use client'
import React from 'react'
import './style.css'
import Image from 'next/image'

const Page = () => {
    const pages = [
        {
            link: 'https://web.archive.org/web/20230315212251/https://codemaine.github.io/'
        },
        {
            link: 'https://web.archive.org/web/20230315212251/https://codemaine.github.io/'
        },
        {
            link: 'https://web.archive.org/web/20230315212251/https://codemaine.github.io/'
        },
        {
            link: 'https://web.archive.org/web/20230315212251/https://codemaine.github.io/'
        }
    ]
  return (
    <div>
    <main>
  <main className='.div'></main>
  <main className='.div'></main>
  <main className='.div'></main>
  <main className='.div'></main>
  <main className='.div'></main>
</main>
<div className="absolute top-[30vh] left-[38vw] w-[23%]" style={{ perspective: '400px' }}>
<div className='flex flex-col gap-8 items-center justify-center z-10' style={{ transform: 'rotateX(25deg) translateZ(100px)' }}>
  <p className='text-black text-3xl font-semibold text-center'>Explore some of my older sites. Go back in time...</p>
  <div className='grid grid-cols-2 w-full h-full gap-2'>
    {pages.map((item, index) => (<div className='group relative block cursor-pointer' onClick={() => window.open(item.link)}>
    {index !== 3 && <Image className={`aspect-video w-full bg h-auto rounded`} width={100} height={100} src={`/images/versions/v${index+1}.svg`} />}
    {index !== 3 ? <div className='absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex'>
        <p className='text-white font-medium text-center'>v{index+1} <br/>{index == 2 && '(the current one)'}</p>
        </div> : <div className='absolute left-0 top-0 h-full w-full items-center justify-center rounded bg-slate-500 align-middle  transition-opacity lg:flex'>
        <p className='text-white font-medium'>👀</p>
        </div>}
    </div>))}
  </div>
  </div>
</div>
</div>
  )
}

export default Page