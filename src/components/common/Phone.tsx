import phone from "@/data/phones.json"
import { Link, useNavigate } from "react-router"
function Phone() {
    const navigate=useNavigate()
    return (
        <Link to={`/products/${phone[0].id}`}  className="relative rounded  w-[312px] h-[512px] flex flex-col overflow-hidden  bg-white ">
            <div className="group w-full h-[312px]   cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center ">
                        <img src={phone[0].images[0]} onClick={() => navigate(`/phone[0]s/${phone[0].id}`)} alt="" />
                    </div>

                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center   text-white [transform:rotateY(180deg)]">
                        <img src={phone[0].images[1]} onClick={() => navigate(`/phone[0]s/${phone[0].id}`)} alt="" />
                    </div>
                </div>
            </div>
            <p className="w-full text-center font-monserat text-secondary px-2 font-semibold">
                {phone[0].desc}
            </p>
            
        </Link>
    )
}

export default Phone