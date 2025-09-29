import { useShopContext } from "@/hooks/useShopContext"
import { Minus, Plus, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router"

function Cart() {
  const [total, setTotal] = useState(0)
  const { cart, deleteFromCart } = useShopContext()
  useEffect(() => {
    if (!cart?.length) return
    const prices = cart.map((el) => el.price * el.qte).reduce((a, b) => a + b)
    setTotal(prices)
  }, [])
  return (
    <div className="px-6 sm:px-14 flex flex-col gap-4 font-monserat text-secondary mb-4">
      <div className="hidden sm:flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium  border-b-[0.002px] border-[#5c59593b] mb-2">
        <Link to={"/"}>Acceuil</Link>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
        </svg>
        <Link to={"#"}>Votre pannier </Link>
      </div>
      <h1 className="text-2xl font-bold my-2 text-black font-roboto">Panier</h1>

      {cart?.length ? <div className="w-full flex flex-col gap-4">
        {cart.map((el, i) => (
          <div key={i} className="w-full sm:flex gap-4 justify-between items-center min-h-[100px] ">
            <Link to={`/products/${el.id}`} className="h-full flex max-w-full sm:max-w-[509px] justify-between items-center">
              <img src={el.img} alt="image of the product" width={62} height={69} className="object-cover" />

              <div className="flex flex-col gap-2">
                <p className="text-[18px]">{el.desc} </p>
                <span className="text-[14px]">{el.color} </span>
              </div>
            </Link>
            <div className="w-[110px] px-1 h-[55px] rounded flex justify-between items-center border border-[#9797974f]">
              <button className="cursor-pointer"><Minus /> </button>
              <span>{el.qte} </span>
              <button className="cursor-pointer"><Plus /> </button>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <div className="flex gap-1">
                <h1 className="text-xl md:text-2xl text-red-600 font-bold">{el.price} FCFA </h1>
                <span className="h-full flex justify-center items-center">
                  <h2 className="line-through font-semibold font-roboto text-[14px] text-end">{el.normalPrice} FCFA</h2>
                </span>
              </div>
              <button className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={() => deleteFromCart(el.id)}>
                <X className="w-4 text-red-500" />
              </button>
            </div>
          </div>
        ))}

      </div> : ""
      }

      {
        !cart?.length ? <p>
          Votre panier est vide. <br />Continuez à parcourir notre catalogue <Link to={"/collections/"} className="text-primary">ici</Link>.
        </p> : ""
      }
      {
        cart?.length ? <div className="w-full flex justify-end items-end flex-col gap-4 ">
          <h1>Sous-total <span className="text-2xl font-bold">{total} FCFA </span></h1>
          <button className="px-4 py-2 rounded bg-primary cursor-pointer font-bold text-xl text-white hover:text-[#e6e5e5] hover:bg-secondary">PASSER LA COMMANDE</button>
        </div> : ""
      }
    </div>
  )
}

export default Cart