import { headingFont } from '@/fonts';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

const Writing = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <main className="py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 flex flex-col gap-8 min-[1200px]:gap-12">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-[1.4%] transition-all">
        <div className="col-span-1 ease-linear relative lg:sticky h-min lg:h-auto transition-all left-sidebar top-0 p-0 min-[1200px]:p-5">
          <p className={`${headingFont.className} relative lg:sticky top-0 lg:top-10 text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>
            Writing
          </p>
        </div>
        <div className="col-span-2 right-content p-0 min-[1200px]:p-5">
          <div className="flex flex-col gap-8 min-[1200px]:gap-12">
            {blogs.map((item) => (
              <Link key={item.slug} href={`/writing/${item.slug}`} className="flex flex-col gap-3 border-b border-slate-300 pb-8 min-[1200px]:pb-12">
                <p className="text-[28px] min-[1200px]:text-3xl font-semibold">{item.title}</p>
                <p className="text-[18px] md:text-[20px] min-[1200px]:text-2xl text-slate-500 flex items-center gap-2">
                  {moment(item.dateWritten).format('ll')} <span className="text-xs font-normal text-slate-400">•</span> {item.minRead} min read
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Writing;