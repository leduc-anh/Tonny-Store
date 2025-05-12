import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';
import { slugify } from "../lib/slugify";
function ProductCard({ image, name, price, details }) {

    return (
        <Link className={cn("flex justify-center")} to={`/product/${slugify(name)}`}>
        <div className={cn("relative  w-full sm:w-1/2 md:w-4/5 lg:w-1/4 xl:w-1/5 overflow-hidden  group")}>
        <div className="relative aspect-square overflow-hidden">
            <img
                  src={Array.isArray(image) ? image[0]?.src : image?.src || image}
                alt={name}
                className="w-full h-auto object-cover transition duration-300 group-hover:brightness-[0.8]"
            />
            <div className="absolute inset-0 flex items-end justify-center transition duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="bg-white w-full px-3 h-1/5  py-1 text-xs shadow hover:bg-gray-500">
                    🛒 Thêm vào giỏ
                </button>
                <button className="bg-white w-full h-1/5 px-3 py-1 text-xs shadow hover:bg-gray-500">
                    ❤️ Yêu thích
                </button>
            </div>
        </div>

        <div className="p-2 text-center">
            <h2 className="text-sm font-semibold text-gray-800 truncate">{name}</h2>
            <p className="text-red-500 text-sm font-medium">{price}₫</p>
        </div>
    </div>
    </Link>
    )
}

export default ProductCard

