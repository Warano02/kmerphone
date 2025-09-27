import { Link } from "react-router"
import Collections from "../collections/AllCollections"
function CollectionsPreview() {
    return (
        <div className="px-4">
            <Collections size={6}/>
            <div className="w-full flex justify-center mt-4">
                <Link to={"/collections"} className="text-white font-bold font-monserat hover:bg-[#5c5b5b] px-6 py-4 rounded-2xl bg-primary">
                    Toutes les collections
                </Link>
            </div>
        </div>
    )
}

export default CollectionsPreview