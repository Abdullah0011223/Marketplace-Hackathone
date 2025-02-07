'use client';
import React, { useState, ChangeEvent } from 'react';
import WebsiteBanner from '../components/WebsiteBanner';
import Gurantees from '../components/Gurantees';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';
import { UseCartContext } from '../Context/CartContext';

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(16);
  const [optionValue, setOptionValue] = useState<string>('');
  const { data = [] } = UseCartContext();

  // Remove duplicate products
  const uniqueProducts = data.filter(
    (product, index, self) => index === self.findIndex((p) => p.id === product.id)
  );

  const handleOptionChanges = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewAll = () => {
    setCurrentPage(1);
    setOptionValue('');
  };

  const refinedArray =
    optionValue === 'From Expensive to Cheap'
      ? [...uniqueProducts].sort((a, b) => b.price - a.price)
      : [...uniqueProducts].sort((a, b) => a.price - b.price);

  const paginatedArray = refinedArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(refinedArray.length / itemsPerPage);

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <WebsiteBanner title={'Shop'} />

      {/* Filter Section */}
      <div className="hidden md:block">
        <div className="cp w-full bg-white shadow-md rounded-lg flex-wrap flex-between py-5 px-6">
          <section className="flex items-center gap-6 md:gap-8 md:w-[50%]">
            <img src="/images/Filter1.png" alt="Filter Icon" className="size-6" />
            <span className="font-medium text-lg tracking-wider text-gray-800">Filter</span>
            <img src="/images/Filter2.png" alt="Filter Icon" className="size-6" />
            <img src="/images/Filter3.png" alt="Filter Icon" className="size-6" />
            <span className="text-3xl text-black">|</span>
            <span className="text-sm md:text-md font-medium tracking-wider text-black">
              Showing {paginatedArray.length} of {refinedArray.length} Results
            </span>
          </section>
          <section className="flex items-center gap-4 md:w-[40%]">
            <span className="text-lg font-medium tracking-wide text-gray-800">Sort By</span>
            <select
              className="outline-none text-md placeholder:text-xl w-max rounded-lg border border-gray-300 bg-white p-3 text-gray-700 focus:border-blue-400 transition-all"
              value={optionValue}
              onChange={handleOptionChanges}
            >
              <option value="From Expensive to Cheap">From Expensive to Cheap</option>
              <option value="From Cheap to Expensive">From Cheap to Expensive</option>
            </select>
          </section>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {paginatedArray.map((item, index) => (
          <ProductItem
            key={index}
            index={index}
            item={{
              ...item,
              id: item.id.toString(),
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onViewAll={handleViewAll}
      />

      {/* Guarantees Section */}
      <Gurantees />
    </div>
  );
};

export default Page;
