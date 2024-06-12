import { headingFont } from '@/fonts'
import React from 'react'

const Skills = () => {
    const skills_array = ["User Interface Design", "UX Design", "Web Design", "Mobile Dev"]
  return (
    <main className="py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 flex flex-col gap-12">
    <div className="flex flex-col gap-8 min-[1200px]:gap-14 transition-all">
      <div className="col-span-1 ease-linear transition-all p-0 min-[1200px]:p-5">
        <p className={`${headingFont.className} text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Skills</p>
      </div>
      <div className="right-content p-0 min-[1200px]:p-5">
        <div className="flex flex-col gap-8">         
          {skills_array.map((item) => (<div className="flex flex-col border-b gap-5 border-slate-300 pb-8">
            <p className={`min-[1200px]:text-[80px] md:text-[60px] text-[40px] leading-tight ${headingFont.className}`}>
              {item}
            </p>
          </div>))}
        </div>
      </div>
    </div>
  </main>
  )
}

export default Skills