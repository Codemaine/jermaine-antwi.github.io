import React from 'react'
import Image from 'next/image'
import nightwind from 'nightwind/helper'

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
  return (
    <div className="mt-auto py-8 px-24 absolute w-full flex flex-row justify-between items-center z-10">
    <Image src="/images/navbar-logo.svg" className="rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200" width={35} height={35} />
    <div className="hidden md:flex flex-row items-center gap-10">
      {links.map((item) => (
        <p className="text-white text-xl cursor-pointer">{item.label}</p>))}
        {/* <p onClick={() => nightwind.toggle() }>toggle</p> */}
    </div>
   </div>
  )
}

export default Navbar