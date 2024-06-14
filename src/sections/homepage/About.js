import { headingFont } from '@/fonts'
import React from 'react'

const About = () => {
  return (
      <main className="flex flex-col py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 md:px-200 items-center">
        <div className="w-full">
          <p className={`${headingFont.className} text-[36px] md:text-[48px] min-[1200px]:text-[56px] w-full border-t-2 pt-3 border-t-black`}>About</p>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-8 min-[1200px]:gap-12 md:gap-32 mt-8 min-[1200px]:mt-12">
          <p className="text-[24px] md:text-[28px] min-[1200px]:text-3xl font-medium leading-snug">I’m Jermaine — a freelance digital product designer with 10 years of experience. I care a lot about using design for positive impact. Currently based in Lisbon, Portugal.</p>
          <p className="text-[20px] md:text-[22px] min-[1200px]:text-2xl leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat sed dui sit amet eleifend. Aliquam purus velit, tempor vitae nibh ut, eleifend maximus lorem. Quisque non volutpat tortor. Donec sollicitudin vestibulum nibh ut ultrices. Donec quam nunc, imperdiet vitae purus eget, eleifend pretium mauris. Pellentesque finibus felis ante, in faucibus arcu tempus quis. Phasellus nec mauris sit amet metus gravida accumsan. Donec tristique lacus nibh, vitae posuere nibh elementum ut. Donec sit amet risus rhoncus, facilisis lorem vitae, viverra risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur velit ac convallis tempus. Suspendisse eu eros non lorem sagittis suscipit. Morbi rutrum risus orci. Etiam in tortor sed lectus ultrices tempus. Proin sit amet neque enim. Sed porttitor tempor ante at dapibus. Maecenas fringilla, massa nec gravida vehicula, erat risus aliquam enim, nec tincidunt.</p>
        </div>
      </main>
  )
}

export default About