import ProductCard from "./ProductCard";
import { cn } from "../lib/utils";
import dataproductList from "../dataFake/Productfakedata";

function HomePageCard() {
    return (
        <>
            <div className={cn("w-full mx-auto py-8 px-4 xxs:px-2 md:px-8")}>
                <div className={cn("grid grid-cols-1  md:grid-cols-2 gap-4 ")}>
                    <div className={cn("flex text-2xl flex-col items-center justify-between")}>
                        <h1>Vải Trơn</h1>
                    
                    <div className={cn("grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4 md:mt-0")}>
                        {dataproductList
                            .filter((item) => item.collection === "vai-tron")
                            .slice(0, 6)
                            .map((item, index) => (
                                <ProductCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                />
                            ))}
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <button className={cn("bg-white px-3 py-1 text-xs shadow hover:bg-gray-500 mt-4")}>
                            Xem thêm ({dataproductList.filter((item) => item.collection === "vai-tron").length}) sản phẩm khác
                        </button>
                    </div>
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <img
                            src="/images/fakecolletion/vai-tron.webp"
                            alt="collection"
                            className={cn("w-12/12 h-auto")}
                        />
                    </div>
                </div>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 mt-12")}>
                <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <img
                            src="/images/fakecolletion/vai-gam.webp"
                            alt="collection"
                            className={cn("w-12/12 h-auto")}
                        />
                    </div>
                    <div className={cn("flex text-2xl flex-col items-center justify-between")}>
                        <h1>Vải Gấm</h1>
                    
                    <div className={cn("grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4 md:mt-0")}>
                        {dataproductList
                            .filter((item) => item.collection === "vai-gam")
                            .slice(0, 6)
                            .map((item, index) => (
                                <ProductCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                />
                            ))}
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <button className={cn("bg-white px-3 py-1 text-xs shadow hover:bg-gray-500 mt-4")}>
                            Xem thêm ({dataproductList.filter((item) => item.collection === "vai-gam").length}) sản phẩm khác
                        </button>
                    </div>
                    </div>
                    
                </div>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 mt-12")}>
                    <div className={cn("flex text-2xl flex-col items-center justify-between")}>
                        <h1>Thời Trang Mặc Nhà</h1>
                    
                    <div className={cn("grid  grid-cols-2 sm:grid-cols-3 gap-6 mt-4 md:mt-0")}>
                        {dataproductList
                            .filter((item) => item.collection === "quan-ao-mac-nha")
                            .slice(0, 6)
                            .map((item, index) => (
                                <ProductCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                />
                            ))}
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <button className={cn("bg-white px-3 py-1 text-xs shadow hover:bg-gray-500 mt-4")}>
                            Xem thêm ({dataproductList.filter((item) => item.collection === "quan-ao-mac-nha").length}) sản phẩm khác
                        </button>
                    </div>
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <img
                            src="/images/fakecolletion/thoi-trang-mac-nha.webp"
                            alt="collection"
                            className={cn("w-12/12 h-auto")}
                        />
                    </div>
                </div>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 mt-12")}>
                <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <img
                            src="/images/fakecolletion/thoi-trang-nam.webp"
                            alt="collection"
                            className={cn("w-12/12 h-auto")}
                        />
                    </div>
                    <div className={cn("flex text-2xl flex-col items-center justify-between")}>
                        <h1>Thời Trang Nam</h1>
                    
                    <div className={cn("grid  grid-cols-2 sm:grid-cols-3 gap-6 mt-4 md:mt-0")}>
                        {dataproductList
                            .filter((item) => item.collection === "thoi-trang-nam")
                            .slice(0, 6)
                            .map((item, index) => (
                                <ProductCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                />
                            ))}
                    </div>
                    <div className={cn("flex items-center justify-center mt-4 md:mt-0")}>
                        <button className={cn("bg-white px-3 py-1 text-xs shadow hover:bg-gray-500 mt-4")}>
                            Xem thêm ({dataproductList.filter((item) => item.collection === "thoi-trang-nam").length}) sản phẩm khác
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HomePageCard
