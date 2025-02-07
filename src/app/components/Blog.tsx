import React from 'react';
import Underline from './Underline';
import { GoClock } from 'react-icons/go';
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link';

interface BlogPost {
  title: string;
  time: string;
  date: string;
  src: string;
}

const Blog: React.FC = () => {
  const blogData: BlogPost[] = [
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog1.png',
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog2.png',
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog3.png',
    },
  ];

  return (
    <div className="min-h-[70vh] py-12 md:py-[5rem] bg-white w-screen flex flex-col gap-4 px-6 md:px-8 lg:px-16">
      <h1 className="capitalize text-3xl font-[600] tracking-wider text-center text-blue-600">
        Our Blogs
      </h1>
      <p className="text-center tracking-wider font-medium text-lg text-blue-600">
        Find a bright ideal to suit your taste with our great selection.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-3 md:mt-[2.8rem] mx-auto max-w-[1200px]">
        {blogData.map((value, index) => (
          <Link
            href={'/Blog'}
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-3 border rounded-md shadow-sm"
          >
            {/* Blog Image */}
            <img
              src={value.src}
              alt={value.title}
              className="object-cover w-[100%] h-auto rounded-md"
            />
            {/* Blog Title */}
            <p className="tracking-wider text-left capitalize w-[100%] font-[500] text-[.85em] md:text-[.95em] text-blue-600">
              {value.title}
            </p>
            {/* Underline Component */}
            <Underline title={'Read More'} />
            {/* Blog Metadata */}
            <div className="flex items-center mt-2 gap-4 text-blue-600">
              {/* Time */}
              <div className="flex items-center gap-2">
                <GoClock className="size-4 text-blue-600" />
                <p className="font-medium text-[.75em] md:text-[.85em] tracking-wider">
                  {value.time}
                </p>
              </div>
              {/* Date */}
              <div className="flex items-center gap-2">
                <SlCalender className="size-4 text-blue-600" />
                <p
                  dangerouslySetInnerHTML={{ __html: value.date }}
                  className="font-medium text-[.75em] md:text-[.85em] tracking-wider"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Posts */}
      <Link href={'/Blog'} className="w-full mt-2 md:mt-4 grid place-content-center text-blue-600">
        <Underline title={'View All Posts'} />
      </Link>
    </div>
  );
};

export default Blog;
