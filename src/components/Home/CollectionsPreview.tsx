import { Link } from "react-router"
import Title from "../ui/Title"
import collections from "@/data/collections.json"
function CollectionsPreview() {
    return (
        <div className="px-4">
            <Title text="Nos Collections" />
            <div className="w-full px-4 grid grid-cols-3 gap-2">
                {collections.map((collection, i) => (
                    <Link to={`/collections/${i + 1 !== collections.length ? collection.name.toLocaleLowerCase() : ""}`} key={i} className="w-96 h-[412px] relative">
                        <img src={collection.img} alt="Collection logo" className="w-full h-full object-cover" />
                        <div className="py-2 w-full  bg-[#b3b3b3] absolute bottom-0">
                            <h1 className="text-center font-extrabold text-white font-monserat text-xl"> {collection.name.toUpperCase()}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-full flex justify-center mt-4">
                <Link to={"/collections"} className="text-white font-bold font-monserat hover:bg-[#5c5b5b] px-6 py-4 rounded-2xl bg-primary">
                    Toutes les collections
                </Link>
            </div>
        </div>
    )
}

export default CollectionsPreview