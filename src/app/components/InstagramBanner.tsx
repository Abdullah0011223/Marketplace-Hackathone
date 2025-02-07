
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  title?: string;
  btnClass: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, btnClass, children }) => {
  return (
    <button className={btnClass}>
      {title ? title : children}
    </button>
  );
};

const InstagramBanner: React.FC = () => {
  return (
    <div className='min-h-[50vh] flex-center w-screen px-6 md:px-8 my-4 lg:px-16 relative'>
     <img src="/images/InstagramBanner.png" className='absolute top-0 left-0 z-10 object-cover size-full' alt="Instagram Banner" />
     <div className='absolute z-40 flex flex-col items-center justify-center gap-2 md:gap-4 p-[4rem] '>
         <h1 className='text-[1.8em] sm:text-[2rem] md:text-[3rem] font-bold tracking-wide'>Our Instagram</h1>
         <h3 className='text-[.9em] md:text-[1.1rem] font-medium tracking-wide'> Follow our Store on Instagram</h3>
         <Button btnClass='px-[2em] md:px-[3em] rounded-[1.8em] py-3 bg-white tracking-wider shadow-lg border border-gray-300'>
           <Link 
             href='#' 
             target="_blank" 
             rel="noopener noreferrer"
             className='text-black hover:text-green-600'
           >
             Follow Us
           </Link>
         </Button>
     </div>
    </div>
  );
};

export default InstagramBanner;
