import type { ProductCollectionProps } from "@/types"
import { Link } from "react-router"
function Phone({ phone }: ProductCollectionProps) {
    return (
        <Link to={`/products/${phone.id}`} className="relative rounded  w-[249px] h-[357px] flex flex-col overflow-hidden  bg-white ">
            <div className="group w-full h-[289px]   cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center ">
                        <img src={phone.images[0]} className="w-full h-full object-cover" alt="" />
                    </div>

                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center   text-white [transform:rotateY(180deg)]">
                        <img src={phone.images[1]} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
            <p className="w-full text-[16px] font-monserat text-[#030303] px-2 font-semibold">
                {phone.desc.slice(0, 62).concat("...")}
            </p>
            <div className="w-full mt-3 gap-1">
                <span className="text-[19px] text-[#CA0000] font-bold font-monserat ">{phone.price} FCFA </span>
                <span className="text-[14px] text-[#757575] font-bold font-monserat line-through ">{phone.normalPrice} FCFA </span>
            </div>
        </Link>
    )
}

export default Phone