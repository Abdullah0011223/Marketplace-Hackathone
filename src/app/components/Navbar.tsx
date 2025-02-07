'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from 'react-icons/rx';
import CartSideBar from './CartSideBar';
import { UseCartContext } from '../Context/CartContext';
import handleSearch from '../components/searchbar'

const Header: React.FC = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false); // ✅ Search bar toggle state

    const toggleSearchBar = () => {
      setIsSearchOpen(!isSearchOpen);
    };


    const [sideBarDisplay, setSideBarDisplay] = useState(false);
    const { cartItems, cartBarOpen, setCartBarOpen } = UseCartContext();
    const navElements: string[] = ['Home', 'Shop', 'Blog', 'Contact', 'Cart'];

    return (
        <header className="px-6 w-dvw relative flex items-center py-4 gap-4 justify-between lg:py-8 md:px-8 lg:px-16 bg-[#FBEBB5]">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 font-bold text-[1.3em] sm:text-[1.5em] cursor-pointer md:text-[1.6em] lg:text-[1.9em] tracking-wider">
            </div>
            {/* Navbar */}
            <nav className="flex items-end md:gap-[2.7em]">
                {navElements.map((navItem, index) => (
                    <Link
                        key={index}
                        className="hidden md:block md:text-[1em] lg:text-lg text-black tracking-wider font-bold relative hover:text-green-500 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        href={index === 0 ? '/' : `/${navItem}`}
                    >
                        {navItem}
                    </Link>
                ))}
            </nav>
            {/* Icons */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <Link href="/Account">
                    <FaRegUser className="size-4 sm:size-5 md:size-6 font-bold text-black hover:text-green-500 hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
                </Link>
               
                <div className="flex items-center space-x-2 relative">
            <button 
              aria-label="Search"
              className="hover:text-gray-500"
              onClick={toggleSearchBar}
            
            >
    
                    <IoSearch  className="size-4 sm:size-5 md:size-6 font-bold text-black hover:text-green-500 hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
            
            </button>
          
            {isSearchOpen && (
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                } bg-white border border-gray-300 rounded-lg shadow-lg flex items-center px-3`}
              >
                <input
                  type="text"
                  placeholder="Search our articles"
                  className="w-full p-2 text-sm text-gray-700 border-none outline-none bg-transparent"
                />
              </div>
            )}
          </div>

          <Link href="/wishlist">
                    <FaRegHeart className="size-4 sm:size-5 md:size-6 font-bold text-black hover:text-green-500 hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
            </Link>

                <div
                    className="flex items-center justify-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                    onClick={() => setCartBarOpen((prev) => !prev)}
                >
                    <FaCartShopping className="size-4 sm:size-5 md:size-6 font-bold text-black hover:text-green-500" />
                    <sup className="size-3 hover:text-green-500 text-black text-xl flex-center p-4 rounded-full">
                        {cartItems.length}
                    </sup>
                </div>
                <GiHamburgerMenu
                    onClick={() => setSideBarDisplay((prev) => !prev)}
                    className="md:hidden block size-4 sm:size-5 md:size-7 cursor-pointer text-black hover:text-green-500 hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                />
            </div>
            {/* Sidebar Menu */}
            {sideBarDisplay && (
                <div
                    className={`flex absolute bg-white text-black right-1 top-4 rounded-2xl flex-col items-center px-[1.5rem] gap-8 py-[2rem] z-[999] min-h-[100vh] w-screen sm:w-[14em]`}
                >
                    <div className="w-full relative">
                        <RxCross1
                            onClick={() => setSideBarDisplay(!sideBarDisplay)}
                            className="top-1/2 right-0 size-6 cursor-pointer rounded-full text-black border-box"
                        />
                    </div>
                    {navElements.map((navItem, index) => (
                        <Link
                            href={index === 0 ? '/' : `/${navItem}`}
                            onClick={() => setSideBarDisplay(!sideBarDisplay)}
                            key={index}
                            className={`font-bold hover:text-green-500 hover:-translate-y-1 transition-all duration-300 ease-in-out text-white leading-0 tracking-wider text-[1.1rem]`}
                        >
                            {navItem}
                        </Link>
                    ))}
                </div>
            )}
            {/* Cart Sidebar */}
            {cartBarOpen && <CartSideBar />}
        </header>
    );
};

export default Header;
