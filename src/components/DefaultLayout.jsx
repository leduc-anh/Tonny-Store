
import { cn } from '../lib/utils';
import Header from './Header';


function AppLayOut({children}) {


    return (
        <>
           <Header />
           <div
                className={cn(
                    "flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-fixed",
                    "pt-20"
                )}
                style={{
                    backgroundImage: "url('/images/background.jpg')", // thay đổi đường dẫn nếu cần
                }}
            >
            <div className={cn("flex flex-col min-h-screen")}>
                <main className={cn("flex-1")}>
                    {children}
                </main>
                <footer className={cn("bg-gray-800 text-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4")}>
                    <div className={cn("flex flex-col items-center")}>
                        <h2 className={cn("text-lg font-bold")}>Liên hệ</h2>
                        <p className={cn("text-sm")}>Địa chỉ: 123 Đường ABC, TP.HCM</p>
                        <p className={cn("text-sm")}>Điện thoại: 0123456789</p>
                        <p className={cn("text-sm")}>Email: 9v4hE@example.com</p>
                    </div>
                    <div className={cn("flex flex-col items-center")}>
                        <h2 className={cn("text-lg font-bold")}>Hướng dẫn mua hàng</h2>
                        <p className={cn("text-sm")}>Hướng dẫn mua hàng</p>
                        <p className={cn("text-sm")}>Hướng dẫn vận chuyển</p>
                        <p className={cn("text-sm")}>Chính sách đổi trả</p>
                        <p className={cn("text-sm")}>Điều khoản dịch vụ</p>
                        <p><p className={cn("text-sm")}>Chính sách bảo mật</p></p>
                    </div>
                    <div className={cn("flex flex-col items-center")}>
                        <h2 className={cn("text-lg font-bold")}>Theo dõi chúng tôi</h2>
                        <p className={cn("text-sm")}>Facebook</p>
                        <p className={cn("text-sm")}>Instagram</p>
                        <p className={cn("text-sm")}>Twitter</p>
                        <p className={cn("text-sm")}>LinkedIn</p>
                    </div>
                    <div className={cn("flex flex-col items-center")}>
                        <h2 className={cn("text-lg font-bold")}>Thông tin khác</h2>
                        <p className={cn("text-sm")}>Giới thiệu</p>
                        <p className={cn("text-sm")}>Tin tức</p>
                        <p className={cn("text-sm")}>Khuyến mãi</p>
                        <p className={cn("text-sm")}>Liên hệ</p>
                        <p className={cn("text-sm")}>Hỗ trợ khách hàng</p>
                    </div>
                </footer>
            </div>
            </div>
        </>
    )
}

export default AppLayOut;
