import { Link, useNavigate } from "react-router"
import Title from "../ui/Title"
import bestSellers from "@/data/bestseller.json"
function BestSeller() {
  const navigate = useNavigate()
  return (
    <section className="w-full relative mb-2">
      <div className="div-3 w-full h-28"></div>
      <div className="w-full c ">
        <Title text="Meilleurs ventes" />
        <div className="flex flex-wrap gap-2 sm:justify-center">
          {
            bestSellers.map((product, idx) => (
              <div key={idx} className="relative rounded  w-[312px] h-[512px] flex flex-col overflow-hidden border-[0.2px] border-secondary bg-white ">
                <div className="group w-full h-[312px]   cursor-pointer">
                  <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center ">
                      <img src={product.images[0]} onClick={() => navigate(`/products/${product.id}`)} alt="" />
                    </div>

                    <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center   text-white [transform:rotateY(180deg)]">
                      <img src={product.images[1]} onClick={() => navigate(`/products/${product.id}`)} alt="" />
                    </div>
                  </div>
                </div>
                <p className="w-full text-center font-monserat text-secondary px-2 font-semibold">
                  {product.desc}
                </p>
                <Link to={`/products/${product.id}`} className="w-full py-4 absolute bg-secondary text-white font-bold bottom-0 rounded flex justify-center items-center">
                  Voir le produit
                </Link>
              </div>
            ))
          }
        </div>
        <div className="w-full h-28 flex items-center justify-center">
          <Link to={"/collection/bestseller"} className="px-8 py-4 rounded text-white bg-secondary font-bold hover:bg-gray-600">Voir toute la collection</Link>
        </div>
      </div>
      <div className="div-4 w-full h-28">

      </div>
    </section>
  )
}

export default BestSeller