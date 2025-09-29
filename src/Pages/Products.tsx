
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import mockPhone from "@/data/product.json"
import type { SingleProduct } from "@/types/pages/Product"
import { Minus, Plus } from "lucide-react"
import Recomandations from "@/components/products/Recomandations"
import CarrouselImage from "@/components/products/CarrouselImage"
import { useShopContext } from "@/hooks/useShopContext"

function Products() {
    const { addToCart } = useShopContext()
    const navigate = useNavigate()
    const [phone, setPhone] = useState<SingleProduct | null>(null)
    const [color, setColor] = useState("")
    const [qte, setQte] = useState(1)
    const [images, setImages] = useState<string[]>([])
    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        if (!phone) {
            setPhone(mockPhone)
            setColor(mockPhone.variants[0].color)
            setImages(() => mockPhone.variants.map((el) => el.image))
        }
    }, [phone])

    const handleClick = () => {
        if (!phone) return
        addToCart({ qte, id: phone.id, color })
        navigate('/cart')
    }

    return (
        <div className="px-6 sm:px-14 flex flex-col gap-4 font-monserat text-secondary">
            <div className="hidden sm:flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium  border-b-[0.002px] border-[#5c59593b] mb-2">
                <Link to={"/"}>Acceuil</Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                </svg>
                <Link to={"/collections"}>Meilleur ventes</Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                </svg>
                <Link to={"#"}>{phone?.desc} </Link>
            </div>
            <div className="sm:flex gap-2 w-full">
                <div className="w-full px-2 sm:w-1/2 h-full">
                    <CarrouselImage images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
                </div>
                <div className="w-full px-2 sm:w-1/2 flex flex-col gap-3 ">
                    <h1 className="text-2xl font-bold text-black">{phone?.desc} </h1>
                    <div className="flex w-full gap-1">
                        <div>
                            <span className="text-2xl text-[#CA0000] font-bold">{phone?.price} FCFA </span>
                            <span className="line-through font-bold text-[17px] ">{phone?.normalPrice} FCFA </span>
                        </div>
                        <span className="w-0.5 h-4 bg-[#7e7e7e81] mt-2"></span>
                        {phone && <span className="p-1 bg-primary text-white font-semibold rounded">Economisez {Math.round(phone.normalPrice - phone.price)} FCFA</span>}
                    </div>
                    <div className=" border-t border-b border-t-[#7e7e7e81] border-b-[#7e7e7e81] flex flex-col gap-2 font-semibold">
                        <div className="flex gap-2">
                            <span></span>
                            <span>Livraison rapide sous 3H</span>
                        </div>
                        <div className="flex gap-2">
                            <span></span>
                            <span>Retour gratuit sous 7 jours</span>
                        </div>
                        <div className="flex gap-2">
                            <span></span>
                            <span className="text-primary">Paiement à la livraison</span>
                        </div>
                        <div className="flex gap-2">
                            <span></span>
                            <span>Garantie 100% Satisfait</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 px-2 items-center w-full h-16 rounded border border-[#cfad125b] bg-[#FFFBE6] font-bold">
                            <img src="https://cdn.shopify.com/s/files/1/0275/5654/4599/files/MTN_-_kmerphone.jpg?v=1753657718" width={32} alt="brands image" />
                            <span>22 Go de data MTN offerts</span>
                        </div>
                        <div className="flex gap-4 px-2 items-center w-full h-16 rounded border border-[#cfad125b] bg-[#FFFBE6] font-bold">
                            <img src="https://cdn.shopify.com/s/files/1/0275/5654/4599/files/Orange_-_Kmerphone.png?v=1753657781" width={32} alt="brands image" />
                            <span>30 Go de data Orange offerts</span>
                        </div>
                    </div>
                    <div className="border-t border-b border-t-[#7e7e7e81] border-b-[#7e7e7e81] w-full h-20 flex items-center gap-4">
                        <span>Couleur : {color} </span>
                        <div className="flex gap-1">
                            {
                                phone?.variants?.map((v, i) => (
                                    <button key={i} className={`w-8 h-8 bg-[${v.exa}] cursor-pointer border-[0.2px] border-[#97979742]`} onClick={() => {
                                        setCurrentImage(i)
                                        setColor(v.color)
                                    }}>

                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-between gap-2">
                        <span>Quantité</span>

                        <div className="flex w-[130px] h-[60px] justify-between items-center border border-[#97979742] rounded">
                            <button className="h-full cursor-pointer" onClick={() => setQte((prev) => prev > 1 ? prev - 1 : 1)}><Minus /> </button>
                            <span>{qte} </span>
                            <button className="h-full cursor-pointer" onClick={() => setQte((prev) => prev + 1)}><Plus /> </button>
                        </div>
                    </div>
                    <button className="w-full text-center py-4 rounded text-white font-bold bg-primary cursor-pointer hover:bg-[#00855fd2]" onClick={handleClick}>
                        ACHETER MAINTENANT
                    </button>
                    <div className="w-full px-2 flex flex-col gap-4">
                        {
                            phone?.description.map((desc, i) => (
                                <>
                                    <h1 className="text-2xl font-bold font-monserat" key={i}>{desc.title} </h1>
                                    <p>{desc.desc} </p>
                                    {desc.img && (
                                        <img src={desc.img} alt="product image" />
                                    )}
                                </>)
                            )
                        }
                    </div>
                    <div className="mt-4">
                        <h1 className="font-bold my-2 text-2xl">{"toutes les carractéristiques:".toLocaleUpperCase()} </h1>
                        <ul>
                            {
                                phone?.caract.map((c, i) => (
                                    <li key={i}><span>{c.label}: </span> {c.value} </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

            </div>
            <Recomandations />
        </div>
    )
}

export default Products