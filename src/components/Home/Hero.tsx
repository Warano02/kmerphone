import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import img1 from "@/assets/img/kmerphone-01.webp"
import img2 from "@/assets/img/kmerphone_2.webp"
import { Link } from "react-router"
function Hero() {
    const [page, setPage] = useState(1)
    return (
        <section className="w-full h-screen bg-black relative">
            {page === 1 ? <Frist /> : <Second />}
            <div className="w-full h-28 flex justify-between absolute top-1/2">
                <button className={`w-16 h-full  cursor-pointer flex justify-center items-center ${page === 1 && "opacity-0"}`} onClick={() => setPage(1)}><ChevronLeft className="h-full w-full text-secondary" /></button>
                <button className={`w-16 h-full  cursor-pointer flex justify-center items-center ${page === 2 && "opacity-0"}`} onClick={() => setPage(2)}><ChevronRight className="h-full w-full text-secondary" /></button>
            </div>

            <div className="w-32 h-2 flex gap-2 absolute bottom-3 right-4">
                <span className={`w-1/2 h-full ${page === 1 ? "bg-primary" : "bg-gray-400"}`}></span>
                <span className={`w-1/2 h-full ${page === 2 ? "bg-primary" : "bg-gray-400"}`}></span>
            </div>
        </section>
    )
}
const Frist = () => {
    return (
        <div className="w-full h-full relative">
            <img src={img1} alt="" className="w-full h-full object-center sm:object-cover" />
            <div className="absolute top-1/2 right-56 flex flex-col gap-2">
                <h1 className="text-2xl lg:text-4xl font-monserat text-secondary font-bold">Nouveautés</h1>
                <div className=" w-55 py-4  bg-secondary text-white m-4">
                    <p className="text-center w-full  font-monserat">Smartphone meilleur qualité</p>
                </div>
                <Link to={"/collection"} className="group hover:text-white hover:border-none relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-secondary px-6 font-medium text-secondary">
                    <span className="absolute h-0 w-0  bg-secondary transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
                    <span className="relative"> En savoir plus</span>
                </Link>
            </div>
        </div>
    )
}
const Second = () => {
    return (
        <div className="w-full h-full relative">
            <img src={img2} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-56 flex flex-col gap-2">
                <h1 className="text-2xl lg:text-4xl font-monserat text-secondary font-bold">Promotions</h1>
                <div className=" w-55 py-4  bg-secondary text-white m-4">
                    <p className="text-center w-full  font-monserat">Meilleur prix smartphone</p>
                </div>
                <Link to={"/collection"} className="group hover:text-white hover:border-none relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-secondary px-6 font-medium text-secondary">
                    <span className="absolute h-0 w-0  bg-secondary transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
                    <span className="relative"> En savoir plus</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero