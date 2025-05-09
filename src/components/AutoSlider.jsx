import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils"; // nếu bạn đang dùng classnames helper

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
  "/images/slide4.webp",
];

function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // đổi ảnh sau mỗi 3 giây

    return () => clearInterval(interval); // clear khi unmount
  }, []);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className={cn("w-full md:h-[80vh] xxs:aspect-[16/9] relative overflow-hidden")}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
       <div className={cn("absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2")}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-full bg-pink-200 opacity-50 hover:opacity-100 transition-all duration-300",
              index === currentIndex && "bg-pink-500 opacity-100"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoSlider;