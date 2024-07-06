import React, { useState } from 'react'
import Image from 'next/image'
import nightwind from 'nightwind/helper'
import { MenuIcon, XIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({ dark, fixed }) => {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState();

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
    <div className={`mt-auto py-8 px-8 sm:px-24 ${!fixed && 'absolute'} w-full flex flex-row justify-between items-center z-10`}>
    <Image src="/images/bubu.svg" className={`rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200 ${dark && 'invert'}`} width={45} height={45} />
    <div className="hidden md:flex flex-row items-center gap-10">
      {links.map((item) => (
        <p className={`${dark ? 'text-black': 'text-white'} text-xl cursor-pointer`}>{item.label}</p>))}
        {/* <p onClick={() => nightwind.toggle() }>toggle</p> */}
    </div>
    <MenuIcon onClick={() => setIsOpen(true)} color={dark ? "#000" : "#fff"} className='block md:hidden' />
    <div
      className={`fixed flex flex-col justify-center items-center z-20 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
     <div className="absolute left-0 w-full flex flex-row justify-between top-0 p-6">
     <Image src="/images/bubu.svg" className={`rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200 invert h-8 w-8`} width={45} height={45} />
    <button onClick={() => setIsOpen(false)}>
        {/* <FontAwesomeIcon className="text-5xl" icon={faXmark} /> */}
        <XIcon color="#000" size={32} />
      </button>
     </div>
      <ul className="flex flex-col z-10 justify-center items-center space-y-10">
        {links.map((item) => (<li className="text-5xl">
          <Link href={item.to} className='text-black'>{item.label}</Link>
        </li>))}
      </ul>
    </div>
   </div>
  )
}

export default Navbar