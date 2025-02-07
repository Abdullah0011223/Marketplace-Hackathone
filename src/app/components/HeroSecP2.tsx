import React from 'react';

const HeroSecP2: React.FC = () => {
  return (
    <div className="w-full py-[3rem] min-h-[100vh] md:flex gap-16 items-center justify-center px-8 lg:px-16 bg-blue-50">
      {/* Side Table Section */}
      <section className="md:w-1/2 flex flex-col justify-center items-center gap-4 relative">
        <img
          src="/images/table1.png"
          className="w-[605px] h-[562px] object-cover overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-4"
          alt="Side Table"
        />
        <h2 className="text-3xl tracking-wider font-bold text-blue-900">Single Table</h2>
        <div className="relative group">
          <a
            href="/Shop"
            className="text-lg font-semibold text-blue-900 px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out group-hover:bg-[#E5E5E5]" 
          >
            View More
          </a>
          <span
            className="block w-full h-[2px] bg-red-600 mt-2 transition-all duration-300 ease-in-out group-hover:bg-[#E5E5E5]" 
          ></span>
        </div>
      </section>

      {/* Corner Table Section */}
      <section className="md:w-1/2 flex flex-col justify-center items-center gap-4 relative">
        <img
          src="/images/table1.png"
          className="w-[605px] h-[562px] object-cover overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-4"
          alt="Corner Table"
        />
        <h2 className="text-3xl tracking-wider font-bold text-blue-900">Single Table</h2>
        <div className="relative group">
          <a
            href="/Shop"
            className="text-lg font-semibold text-blue-900 px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out group-hover:bg-[#E5E5E5]" 
          >
            View More
          </a>
          <span
            className="block w-full h-[2px] bg-red-600 mt-2 transition-all duration-300 ease-in-out group-hover:bg-[#E5E5E5]" 
          ></span>
        </div>
      </section>
    </div>
  );
};

export default HeroSecP2;
