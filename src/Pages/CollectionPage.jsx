import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setPrice } from "../redux/slices/filterSlice";  
import dataproductList from "../dataFake/Productfakedata";
import ProductCard from "../components/ProductCard";
import AppLayOut from "../components/DefaultLayout";
import { cn } from "../lib/utils";

const COLORS = ["đỏ", "xanh", "đen", "trắng", "vàng", "nâu", "hồng"];
const PRICE_RANGES = [
  { label: "Dưới 200.000", min: 0, max: 200000 },
  { label: "200.000 - 500.000", min: 200000, max: 500000 },
  { label: "Trên 500.000", min: 500000, max: Infinity },
];

function CollectionPage() {
  const { type } = useParams();
  const dispatch = useDispatch();

   const { color: selectedColor, price: selectedPrice } = useSelector((state) => state.filter);

   const collections = useMemo(() => {
    const set = new Set(dataproductList.map((item) => item.collection));
    return Array.from(set);
  }, []);
  const filteredProducts = dataproductList.filter((item) => {
    if (type !== 'all' && item.collection !== type) return false;

    if (selectedColor && !item.name.toLowerCase().includes(selectedColor)) return false;

    if (selectedPrice) {
      const range = PRICE_RANGES.find(r => r.label === selectedPrice);
      if (range && (item.price < range.min || item.price >= range.max)) return false;
    }

    return true;
  });

   const handleColorFilter = (color) => {
    if (color === selectedColor) {
      dispatch(setColor(null)); 
    } else {
      dispatch(setColor(color)); 
    }
  };

  const handlePriceFilter = (label) => {
    if (label === selectedPrice) {
      dispatch(setPrice(null)); 
    } else {
      dispatch(setPrice(label)); 
    }
  };

  return (
    <AppLayOut>
      <div className=" mx-auto py-8 px-2">
        <h1 className="text-2xl font-semibold mb-6 capitalize">
          {type.replaceAll("-", " ")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1  md:block xxs:flex xxs:justify-around ">
            <div>
              <h2 className="text-lg font-semibold mb-2">Bộ sưu tập</h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={`/collection/all`}
                    className={`block px-3 py-1 rounded hover:bg-gray-100 ${type === 'all' ? "bg-gray-200 font-bold" : ""
                      }`}
                  >
                    Tất cả
                  </Link>
                </li>

                {collections.map((col, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/collection/${col}`}
                      className={`block px-3 py-1 rounded hover:bg-gray-100 ${col === type ? "bg-gray-200 font-bold" : ""
                        }`}
                    >
                      {col.replaceAll("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("mt-0")}>
              <h2 className="text-lg font-semibold mb-2">Màu sắc</h2>
              <ul className="space-y-1">
                {COLORS.map((color, idx) => (
                  <li key={idx}>
                    <button
                      className={`w-full text-left px-3 py-1 rounded hover:bg-gray-100 ${selectedColor === color ? "bg-blue-200 font-semibold" : ""
                        }`}
                      onClick={() => handleColorFilter(color)}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 xxs:text-center md:text-start">Giá</h2>
              <ul className="space-y-1">
                {PRICE_RANGES.map((range, idx) => (
                  <li key={idx}>
                    <button
                      className={`w-full text-left px-3 py-1 rounded hover:bg-gray-100 ${selectedPrice === range.label ? "bg-green-200 font-semibold" : ""
                        }`}
                      onClick={() => handlePriceFilter(range.label)}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                
                <ProductCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
                
              ))
            ) : (
              <p>Không tìm thấy sản phẩm phù hợp.</p>
            )}
          </div>
        </div>
      </div>
    </AppLayOut>
  );
}

export default CollectionPage;
