import React from 'react';

const HeroSecP1: React.FC = () => {
  return (
    <div className="md:flex items-center justify-center min-h-screen w-dvw px-6 lg:px-16 md:px-8 bg-[#FBEBB5]">
      {/* Text Section */}
      <section className="md:w-[40%] flex justify-center md:justify-end">
        <div className="flex mt-[5rem] md:mt-0 flex-col gap-2 md:gap-4 text-black">
          {['Rocket single', 'Seater'].map((item: string, index: number) => {
            return (
              <h1
                key={index}
                className="lg:text-[3.3em] sm:text-[3em] text-[2.2em] font-semibold tracking-wider"
              >
                {item}
              </h1>
            );
          })}
          <div className="relative inline-block">
            <a
              href="/Shop"
              className="text-lg font-semibold bg-white text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="md:w-[60%] flex items-center justify-center">
        <img
          src="/images/home-chair.png"
          className="scale-x-[-1] object-center"
          alt="Home Chair"
        />
      </section>
    </div>
  );
};

export default HeroSecP1;
