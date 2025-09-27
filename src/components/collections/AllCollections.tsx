import { Link } from "react-router"
import Title from "../ui/Title"
import collections from "@/data/collections.json"

function AllCollections({ size }: { size?: number }) {
    return (
        <div>
            <Title text="Nos Collections" />
            <div className="w-full px-4 grid grid-cols-3 gap-2">
                {collections.slice(0, size || collections.length).map((collection, i) => (
                    <Link to={`/collections/${i + 1 !== collections.length ? collection.name.toLocaleLowerCase() : ""}`} key={i} className="w-96 h-[412px] relative">
                        <img src={collection.img} alt="Collection logo" className="w-full h-full object-cover" />
                        <div className="py-2 w-full  bg-[#b3b3b3] absolute bottom-0">
                            <h1 className="text-center font-extrabold text-white font-monserat text-xl"> {collection.name.toUpperCase()}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AllCollections