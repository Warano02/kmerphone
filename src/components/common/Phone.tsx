import type { ProductCollectionProps } from "@/types"
import { Link } from "react-router"
function Phone({phone}: ProductCollectionProps) {
    return (
        <Link to={`/products/${phone.id}`} className="relative rounded  w-[312px] h-[512px] flex flex-col overflow-hidden  bg-white ">
            <div className="group w-full h-[312px]   cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center ">
                        <img src={phone.images[0]}  alt="" />
                    </div>

                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center   text-white [transform:rotateY(180deg)]">
                        <img src={phone.images[1]} alt="" />
                    </div>
                </div>
            </div>
            <p className="w-full text-center font-monserat text-secondary px-2 font-semibold">
                {phone.desc}
            </p>

        </Link>
    )
}

export default Phone