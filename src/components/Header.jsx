import { cn } from '../lib/utils';
import React from 'react'
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import Navbar from './Navbar';
import { useState } from 'react';
function Header() {
    const [showSearch, setShowSearch] = useState(false); // trạng thái mở/ẩn

    const toggleSearch = () => {
        setShowSearch(prev => !prev); // toggle khi nhấn icon
    };
    return (
        <header className={cn("bg-pink-100 text-slate-700 md:h-20 sm:h-16 p-4 fixed top-0 left-0 right-0 z-10")}>
            <div className={cn("flex justify-between items-center")}>
                <div className={cn("flex justify-start md:w-1/3")}>
                    <Navbar />
                </div>
                <div className={cn("flex items-center  md:w-1/3 justify-center flex-1 h-12 font-bold")}>
                    <img src="/images/logoblack.png" alt="Logo" className={cn("md:h-full xxs:h-0")} />
                    <h1 className={cn("font-header md:text-2xl sm:text-2xl")}>Tonny Fashion</h1>
                </div>
                <div className={cn("flex items-center justify-end flex-1 w-1/3 gap-x-6")}>
                    {/* Input: ẩn trên màn hình nhỏ */}
                    <input
                        type="text"
                        placeholder="Bạn đang tìm gì?"
                        className={cn(" border-2 border-pink-600 px-2 py-1 focus:outline-none text-black hidden md:block")}
                    />

                    {/* Icon tìm kiếm: chỉ hiện khi input ẩn */}
                    <FaSearch
                        className="text-black md:hidden hover:text-gray-600 cursor-pointer"
                        onClick={toggleSearch}
                        aria-label="Tìm kiếm"
                    />

                    <FaUser className="text-black hover:text-gray-600 cursor-pointer" />
                    <FaHeart className="text-black hover:text-gray-600 cursor-pointer" />
                    <FaShoppingCart className="text-black hover:text-gray-600 cursor-pointer" />
                </div>
            </div>
            {showSearch && (
                <div className="absolute top-20 right-0 w-5/12 bg-white p-3 z-20 shadow-md md:hidden">
                    <input
                        type="text"
                        placeholder="Nhập nội dung tìm kiếm..."
                        className="w-full px-4 py-2 border border-pink-500  focus:outline-none"
                        autoFocus
                    />
                </div>
            )}
        </header>
    );
}

export default Header;