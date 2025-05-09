
import { cn } from '../lib/utils';
function InformationCard({ imageSrc, text, text2, className }) {
    return (
        <div className={cn("p-2 border-2 border-pink-600 ", className)}>
            {imageSrc && (
                <img src={imageSrc} alt="Thông tin" className={cn("w-7 h-7 rounded")} />
            )}
            <div className={cn("flex flex-col ml-4 justify-center")}>
            {text  && (
                <p className="text-gray-700 text-sm">{text}</p>        
            )}
            {text2 && (
                <p className="text-gray-700 text-xs">{text2}</p>        
            )}
            </div>
        </div>
    );
}

export default InformationCard;