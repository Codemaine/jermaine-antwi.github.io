import { headingFont } from '@/fonts'
import React from 'react'

const Experience = () => {
    const past_jobs = [
        {
            employeer: 'Zest',
            role: 'Founder',
            duration: 'June 2023 - today'
        },
        {
            employeer: 'CediRates',
            role: 'Software Engineer',
            duration: 'Apr 2023 - today'
        },
        {
            employeer: 'Classify',
            role: 'Flutter Developer',
            duration: 'Dec 2023 - June 2024'
        },
        {
            employeer: 'Freelance',
            role: 'Web designer',
            duration: 'Feb 2016 - Aug 2023'
        }
    ]
  return (
    <main className="py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 flex flex-col gap-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-[1.4%] transition-all">
          <div className="ease-linear relative lg:sticky h-min lg:h-auto transition-all left-sidebar top-0 p-0 min-[1200px]:p-5">
            <p className={`${headingFont.className} sticky top-0 lg:top-10 text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Experience</p>
          </div>
          <div className="right-content p-0 min-[1200px]:p-5">
            <div className="flex flex-col gap-6 min-[1200px]:gap-12">
              {past_jobs.map((item) => (<div className="flex flex-col border-b gap-2 min-[1200px]:gap-5 border-slate-300 pb-8 min-[1200px]:pb-12">
                <div className="flex flex-col gap-1">
                  <p className="text-[28px] min-[1200px]:text-3xl font-semibold">{item.employeer}</p>
                  <p className="text-[24px] md:text-[28px] min-[1200px]:text-3xl">{item.role}</p>
                </div>
                <p className="text-[20px] md:text-[22px] min-[1200px]:text-2xl text-slate-500 flex items-center gap-2">
                  {item.duration}
                </p>
              </div>))}
              <p className="text-lg font-medium w-full flex flex-col bg-black rounded-lg items-center text-white p-4">See full CV</p>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Experience