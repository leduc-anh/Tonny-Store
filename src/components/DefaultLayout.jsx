
import { cn } from '../lib/utils';
import Header from './Header';


function AppLayOut({children}) {


    return (
        <>
           <Header />
            <div className={cn("flex flex-col min-h-screen")}>
                <main className={cn("flex-1 bg-pink-100  pt-20")}>
                    {children}
                </main>
                <footer className={cn("bg-gray-800 text-white p-4")}>
                    {/* Footer content goes here */}
                </footer>
            </div>
        </>
    )
}

export default AppLayOut;
