import React from 'react';
import Button from './Button';
import Link from 'next/link';

const NewArrival: React.FC = () => {
  return (
    <div className="min-h-[70vh] w-screen md:flex items-center justify-center px-6 md:px-8 lg:px-12 py-10 bg-gray-100">
      {/* Image Section */}
      <section className="md:w-[60%] flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src="/images/AsgardSofa.png"
            alt="Asgard Sofa"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col gap-4 items-center py-[3em] justify-center md:w-[40%] text-center">
        <h3 className="font-medium text-[1.1em] tracking-wider text-blue-800 md:text-2xl">
          New Arrivals
        </h3>
        <h1 className="font-[800] tracking-widest text-[2em] sm:text-[2.2em] md:text-[2.6em] text-gray-900">
          Asgard Sofa
        </h1>
        <Link href="/SingleProduct/14">
          <Button
            title="Order Now"
            btnClass="font-medium text-white text-[.9em] px-6 md:px-[2.5em] py-3 bg-blue-600 tracking-wide md:text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          />
        </Link>
      </section>
    </div>
  );
};

export default NewArrival;
