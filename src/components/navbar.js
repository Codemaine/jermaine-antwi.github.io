import React, { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, Volume1, VolumeX, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useAudio } from '../context/AudioContext';

const Navbar = ({ dark, fixed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isPlaying, setIsPlaying } = useAudio();

  const links = [
    { label: 'Work', to: '/work' },
    { label: 'Writing', to: '/writing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <div className={`mt-auto py-8 px-8 sm:px-24 ${!fixed && 'absolute'} w-full flex flex-row justify-between items-center z-[70]`}>
      <Link href="/">
        <Image
          src="/images/bubu.svg"
          className={`rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200 ${dark && 'invert'}`}
          width={45}
          height={45}
        />
      </Link>
      <div className="hidden md:flex flex-row items-center gap-10">
        {links.map((item) => (
          <p key={item.to} className={`${dark ? 'text-black' : 'text-white'} text-xl cursor-pointer`}>
            <Link href={item.to}>{item.label}</Link>
          </p>
        ))}
        {isPlaying ? (
          <button className="cursor-pointer z-40" onClick={() => setIsPlaying(false)}>
            <Volume1 className="text-white h-7 w-7" color={dark ? "#000" : "#fff"} size={32} />
          </button>
        ) : (
          <button onClick={() => setIsPlaying(true)}>
            <VolumeX className="text-white h-7 w-7" color={dark ? "#000" : "#fff"} size={32} />
          </button>
        )}
      </div>
      <MenuIcon onClick={() => setIsOpen(true)} color={dark ? "#000" : "#fff"} className="block md:hidden" />
      <div
        className={`fixed flex flex-col justify-center items-center z-20 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute left-0 w-full flex flex-row justify-between top-0 p-6">
          <Image
            src="/images/bubu.svg"
            className={`rotate-12 cursor-pointer hover:rotate-0 ease-in-out duration-200 invert h-8 w-8`}
            width={45}
            height={45}
          />
          <button onClick={() => setIsOpen(false)}>
            <XIcon color="#000" size={32} />
          </button>
        </div>
        <ul className="flex flex-col z-10 justify-center items-center space-y-10">
          {links.map((item) => (
            <li key={item.to} className="text-5xl">
              <Link href={item.to} className="text-black">{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;