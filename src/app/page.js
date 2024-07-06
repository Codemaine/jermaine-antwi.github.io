'use client'
import Navbar from "@/components/navbar";
import { headingFont } from "@/fonts";
import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";
import Image from "next/image";
import Newsletter from "@/sections/homepage/Newsletter";
import Projects from "@/sections/homepage/Projects";
import Skills from "@/sections/homepage/Skills";
import Experience from "@/sections/homepage/Experience";
import Writing from "@/sections/homepage/Writing";
import About from "@/sections/homepage/About";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="sm:h-[74vh] h-[50vh] flex flex-col justify-end sm:justify-center items-center">
        <MeshGradientRenderer
          className="gradient !z-0 w-full opacity-85 sm:h-[74vh] h-[50vh]"
          colors={[
            "#2EA95A",
            "#445CA6",
            "#F7BC15",
            "#EA4E44",
            "#F696A9"
          ]}
        />
        <p className={`${headingFont.className} text-white mt-12 sm:pb-0 pb-[15%] z-10 text-[40px] md:text-[60px] min-[1200px]:text-[80px] leading-[1.1] w-full sm:px-0 px-8 sm:w-[65%]`}>Jermaine Antwi <br />Software Engineer</p>
      </main>
      <main className="flex flex-col py-16 md:py-32 px-8 min-[1200px]:py-36 items-center">
        <p className="text-2xl md:text-3xl w-full md:w-4/6">Senior software engineer & product designer with 10 years of experience. Based in Ghana & London. Available for partnerships & collaborations.
          <br /><br />
          Currently building my first startup, Zest. At Ghana’s newest tech startup, CediRates. Previously, the first engineering hire at Jubay Avenue.</p>
      </main>
      <div className="border-[0.3px] w-full border-slate-200" />
      <Projects />
      <div className="border-[0.3px] w-full border-slate-200" />
      <Writing />
      <div className="border-[0.3px] w-full border-slate-200" />
      <About />
      <div className="border-[0.3px] w-full border-slate-200" />
      <Experience />
      <div className="border-[0.3px] w-full border-slate-200" />
      <Skills />
      <div className="border-[0.3px] w-full border-slate-200" />
      <main className="py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 flex flex-col gap-12">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-[1.4%] transition-all">
          <div className="col-span-2 ease-linear relative lg:sticky h-min lg:h-auto transition-all left-sidebar top-0 p-0 min-[1200px]:p-5">
            <p className={`${headingFont.className} sticky top-0 lg:top-10 text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Interests</p>
          </div>
          <div className="right-content col-span-3 grid grid-cols-2 md:grid-cols-3 min-[1200px]:grid-cols-4 gap-2 p-0 min-[1200px]:p-5">
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
            <div className="w-full h-full aspect-square bg-slate-500 rounded-md" />
          </div>
        </div>
      </main>
      <div className="border-[0.3px] w-full border-slate-200" />
      <main className="py-16 md:py-32 min-[1200px]:py-36 px-10 md:px-20 flex flex-col gap-5 md:gap-12">
        <div className="">
          <p className={`${headingFont.className} text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Get in touch</p>
        </div>
        <div>
          <p className={`${headingFont.className} text-[40px] md:text-[60px] min-[1200px]:text-[80px] leading-tight`}>Have a project in mind?</p>
          <div className="flex flex-col md:grid grid-cols-5 gap-12 md:gap-36 mt-5 md:mt-12">
            <p className="text-xl md:text-[22px] min-[1200px]:text-2xl col-span-3">If you want to chat about a project — send me an email on <span className="underline font-medium">jermaineantwi22@gmail.com</span><br /><br />I can help designing a new website, designing a new digital product, building a strong design system, and building websites in Framer.<br /><br />Currently based in Lisbon, Portugal — available for remote-friendly work.</p>
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="text-[28px] md:text-3xl underline font-medium">Twitter</p>
              <p className="text-[28px] md:text-3xl underline font-medium">Instagram</p>
              <p className="text-[28px] md:text-3xl underline font-medium">Linkedin</p>
              <p className="text-[28px] md:text-3xl underline font-medium">Dribbble</p>
            </div>
          </div>
        </div>
      </main>
      <div className="border-[0.3px] w-full border-slate-200" />
      <Newsletter />
      <div className="aspect-[28/9] w-full bg-slate-600">
        <MeshGradientRenderer
          className="gradient !z-0 w-full opacity-85 h-auto aspect-[28/9]"
          colors={[
            "#2EA95A",
            "#445CA6",
            "#F7BC15",
            "#EA4E44",
            "#F696A9"
          ]}
        />
      </div>
      <div className="bg-[#EA4E44]/5 py-16 md:py-32 min-[1200px]:py-36  grid grid-rows-2 sm:gap-y-0 gap-y-4 sm:grid-rows-1 sm:grid-cols-12 w-full px-10">
        <div className="relative sm:col-span-1 col-span-4 sm:row-span-1 row-span-2 flex items-start justify-center">
          <Image src="/images/bubu.svg" className="rotate-12 cursor-pointer hover:rotate-0 invert ease-in-out duration-200" width={35} height={35} />
        </div>
        <div className="sm:col-span-4 col-span-9 flex flex-col justify-center gap-8">
          <p className="text-[28px] leading-tight sm:text-3xl">I'm Jermaine - a software engineer based in Accra & London</p>
          <button className="px-10 py-4 w-fit bg-black text-white rounded-lg">Email me</button>
          <p className="text-base text-slate-600 flex items-center sm:gap-1 gap-3">
            <span className="underline">Time Machine</span>
            <span className="text-xs font-normal text-slate-400">•</span>
            <span>Built by maine</span>
            <span className="text-xs font-normal text-slate-400">•</span>
            <span>©2024 to ∞</span>
          </p>
        </div>
        <div className="sm:col-span-6 col-span-12 !mt-12 sm:mt-0 flex flex-col items-end justify-start sm:justify-end">
          <p className="text-4xl text-right italic">"Do everything in love".</p>
          <p className="text-lg italic">1 Corinthians 16:14</p>
        </div>
      </div>
    </div>
  );
}
