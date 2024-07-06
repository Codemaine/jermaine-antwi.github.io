import React, { useState } from 'react'
import Image from 'next/image'
import { MorphReplace } from 'react-svg-morph';
import nightwind from 'nightwind/helper'
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
    const links = [
        {
            label: 'Work',
            to: '/work'
        },
        {
            label: 'Writing',
            to: '/writing'
        },
        {
            label: 'About',
            to: '/about'
        },
        {
            label: 'Contact',
            to: '/contact'
        }
    ]
    const [morphToSecondSvg, setMorphToSecondSvg] = useState(false);

    const handleToggle = () => {
      setMorphToSecondSvg(!morphToSecondSvg);
    };
  return (
    <div className="mt-auto py-8 px-8 sm:px-24 absolute w-full flex flex-row justify-between items-center z-10">
    <Image src="/images/bubu.svg" className="rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200" width={45} height={45} />
    <div className="hidden md:flex flex-row items-center gap-10">
      {links.map((item) => (
        <p className="text-white text-xl cursor-pointer">{item.label}</p>))}
        {/* <p onClick={() => nightwind.toggle() }>toggle</p> */}
    </div>
    <MenuIcon color="#fff" className='block md:hidden' />
   </div>
  )
}

export default Navbar