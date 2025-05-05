import { useState } from "react";
import { cn } from "../lib/utils"; 
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className={cn("flex justify-between items-center w-full px-4 py-2")}>
  
        {/* Nút Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn("md:hidden text-2xl text-gray-800 focus:outline-none")}
        >
          ☰
        </button>
  
        {/* Menu nav ngang ở màn hình lớn */}
        <nav className={cn("hidden md:flex space-x-4")}>
          <a href="/" className="text-slate-700 hover:text-gray-300">Vải Thời Trang</a>
          <a href="/about" className="text-slate-700 hover:text-gray-300">Thời Trang May Sẵn</a>
          <a href="/contact" className="text-slate-700 hover:text-gray-300">Phụ Kiện</a>
          <a href="/flash-sale" className="text-slate-700 hover:text-gray-300">Flash Sale</a>
        </nav>
  
        {/* Menu dọc cho mobile */}
        {menuOpen && (
          <div className={cn("absolute top-full left-0 w-full bg-white flex flex-col items-start px-4 py-2 space-y-2 shadow-md md:hidden z-50")}>
            <a href="/" className={cn("text-slate-700 hover:text-gray-300")}>Vải Thời Trang</a>
            <a href="/about" className={cn("text-slate-700 hover:text-gray-300")}>Thời Trang May Sẵn</a>
            <a href="/contact" className={cn("text-slate-700 hover:text-gray-300")}>Phụ Kiện</a>
            <a href="/flash-sale" className={cn("text-slate-700 hover:text-gray-300")}>Flash Sale</a>
          </div>
        )}
      </div>
    );
}

export default Navbar
