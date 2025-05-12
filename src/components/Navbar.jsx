import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // dùng để mở menu con

  const navItems = [
    {
      title: "Vải Thời Trang",
      children: [
        { name: "Vải Trơn", link: "/collection/vai-tron" },
        { name: "Vải Gấm", link: "/collection/vai-gam" },
      ],
    },
    {
      title: "Thời Trang May Sẵn",
      children: [
        { name: "Thời Trang Nữ", link: "/collection/thoi-trang-nu" },
        { name: "Thời Trang Nam", link: "/collection/thoi-trang-nam" },
      ],
    },
    {
      title: "Phụ Kiện",
      children: [
        { name: "Giày", link: "/collection/giay" },
        { name: "Túi Xách", link: "/collection/tui-xach" },
        { name: "Cà Vạt", link: "/collection/ca-vat" },
      ],
    },
    { title: "Flash Sale", link: "/flash-sale" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-2 py-2 relative">
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        ☰
      </button>

      <nav className="hidden md:flex space-x-6">
        {navItems.map((item, idx) =>
          item.children ? (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setDropdown(idx)}
              onMouseLeave={() => setDropdown(null)}
            >
              <span className="cursor-pointer py-4 text-slate-700 hover:text-gray-500">
                {item.title}
              </span>

              {dropdown === idx && (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setDropdown(idx)}
                  onMouseLeave={() => setDropdown(null)}
                >


                  {dropdown === idx && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-md mt-2 z-50 min-w-[180px] py-2
                 opacity-0 animate-fadeIn pointer-events-auto"
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 whitespace-nowrap"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Link key={idx} to={item.link} className="text-slate-700 hover:text-gray-500">
              {item.title}
            </Link>
          )
        )}
      </nav>
      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-white px-4 py-2 shadow-md md:hidden z-50  animate-slideDown">
          {navItems.map((item, idx) => (
            <div key={idx} className="mb-2">
              {item.children ? (
                <div>
                  <span className="font-medium">{item.title}</span>
                  <div className="ml-4 mt-1 animate-slideDown">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.link}
                        className="block text-sm text-gray-700 py-1"
                        onClick={() => setMenuOpen(false)} // Tự đóng khi bấm
                      >
                         • {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="block text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
