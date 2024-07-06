import { headingFont } from '@/fonts'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    const projects_array = [{
        name: 'Zest',
        tagline: 'Boost your sales.',
        link: 'https://tryzest.shop',
        image: '/images/projects/zest.jpg'
    }, {
        name: 'CediRates',
        tagline: 'Demystifying Business, Finance and Technology.',
        link: 'https://cedirates.com',
        image: '/images/projects/cedirates.jpg'
    }, {
        name: 'Classify',
        tagline: 'Make your school life easier in just 2 minutes.',
        link: 'https://classify.org.uk',
        image: '/images/projects/classify.jpg'
    }]
  return (
    <main className="py-16 md:py-32 min-[1200px]:py-36 px-0 w-full md:px-20 flex flex-col gap-12">
        <div className='px-8 min-[1200px]:px-0'>
          <p className={`${headingFont.className} text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Work</p>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="aspect-[244/153] w-full rounded-none md:rounded-2xl" alt={`${projects_array[0].name.toLowerCase()}-image`} width={244} height={153} src={projects_array[0].image} unoptimized />
          <div className='px-8 min-[1200px]:px-0'>
            <p className="text-2xl font-semibold flex flex-row items-center">{projects_array[0].name} {/*<Lottie className="h-6 w-6 ml-2 hover:hidden block" animationData={arrow} loop={true} /> */}</p>
            <p className="text-[20px] md:text-[22px] min-[1200px]:text-2xl">{projects_array[0].tagline}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-12">
          {projects_array.slice(1,3).map((item) => (<div className="flex flex-col gap-5 w-full">
            <Image unoptimized className="aspect-[244/153] w-full rounded-none md:rounded-2xl" width={244} height={153} src={item.image} alt={`${item.name.toLowerCase()}-image`} />
            <div className='px-8 min-[1200px]:px-0'>
              <p className="text-2xl font-semibold">{item.name}</p>
              <p className="text-[20px] md:text-[22px] min-[1200px]:text-2xl">{item.tagline}</p>
            </div>
          </div>))}
        </div>
      </main>
  )
}

export default Projects