import { cn } from "../lib/utils";
function ProductCard({ image, name, price }) {
    console.log(image[0].src)
    return (
        <div className={cn("relative w-40 sm:w-full md:w-52 overflow-hidden  group")}>
        <div className="relative aspect-square overflow-hidden">
            <img
                src={image[0].src}
                alt={name}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-[0.8]"
            />
            <div className="absolute inset-0 flex items-end justify-center transition duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="bg-white px-3 py-1 text-xs shadow hover:bg-gray-500">
                    🛒 Thêm vào giỏ
                </button>
                <button className="bg-white px-3 py-1 text-xs shadow hover:bg-gray-500">
                    ❤️ Yêu thích
                </button>
            </div>
        </div>

        <div className="p-2 text-center">
            <h2 className="text-sm font-semibold text-gray-800 truncate">{name}</h2>
            <p className="text-red-500 text-sm font-medium">{price}₫</p>
        </div>
    </div>
    )
}

export default ProductCard

