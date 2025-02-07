// import React from 'react'
// import { UseCartContext } from '../Context/CartContext'

// const FilterBar = () => {
//     const {data} = UseCartContext()
//   return (
//     <div className='cp w-full  bg-[#FAF4F4] flex-wrap flex-between py-5'>
//     <section className='flex items-center gap-6 md:gap-8 md:w-[50%]'>
//         <img src="/images/Filter1.png" alt="" />
//         <span className='font-medium text-lg tracking-wider'>Filter</span>
//         <img src="/images/Filter2.png" alt="" />
//         <img src="/images/Filter3.png" alt="" />
//         <span className='text-3xl'>|</span>
//         <span className='text-[.8em] md:text-[1.1em] font-medium tracking-wider'>Showing {data.length} Results</span>
//     </section>
//     <section className='flex items-center gap-6 md:w-[40%]'>
//         <span className='text-lg font-medium tracking-wide'>
//             Show
//         </span>
//         <input type="text" placeholder='16' max={data.ln} className='outline-none text-xl placeholder:text-xl w-[3.4rem] rounded-lg border-none bg-white p-4 placeholder:text-[#4F4F4F]' />
//         <span className='text-lg font-medium tracking-wide'>
//           Sort By
//         </span>
//         <select className='outline-none text-[1em] placeholder:text-xl w-max rounded-lg border-none bg-white p-3 placeholder:text-[#4F4F4F]'  type="text" placeholder='Default'>
//           <option value="From Expensive to Cheap">From Expensive to Cheap</option>
//           <option value="From Cheap to Expensive">From Cheap to Expensive</option>
//           </select>
//     </section>
//     </div>
//   )
// }

// export default FilterBar




import React, { ChangeEvent } from 'react';
import { UseCartContext } from '../Context/CartContext';

const FilterBar: React.FC = () => {
  const { data = [] } = UseCartContext(); // Default to an empty array in case data is undefined

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Input value:', e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('Sort value:', e.target.value);
  };

  return (
    <div className="cp w-full bg-[#FAF4F4] flex-wrap flex-between py-5">
      <section className="flex items-center gap-6 md:gap-8 md:w-[50%]">
        <img src="/images/Filter1.png" alt="Filter Icon 1" />
        <span className="font-medium text-lg tracking-wider">Filter</span>
        <img src="/images/Filter2.png" alt="Filter Icon 2" />
        <img src="/images/Filter3.png" alt="Filter Icon 3" />
        <span className="text-3xl">|</span>
        <span className="text-[.8em] md:text-[1.1em] font-medium tracking-wider">
          Showing {data.length} Results
        </span>
      </section>
      <section className="flex items-center gap-6 md:w-[40%]">
        <span className="text-lg font-medium tracking-wide">Show</span>
        <input
          type="number"
          placeholder="16"
          max={data.length}
          className="outline-none text-xl placeholder:text-xl w-[3.4rem] rounded-lg border-none bg-white p-4 placeholder:text-[#4F4F4F]"
          onChange={handleInputChange}
        />
        <span className="text-lg font-medium tracking-wide">Sort By</span>
        <select
          className="outline-none text-[1em] placeholder:text-xl w-max rounded-lg border-none bg-white p-3 placeholder:text-[#4F4F4F]"
          onChange={handleSortChange}
        >
          <option value="From Expensive to Cheap">From Expensive to Cheap</option>
          <option value="From Cheap to Expensive">From Cheap to Expensive</option>
        </select>
      </section>
    </div>
  );
};

export default FilterBar;
