import { useState } from "react"
import Title from "../ui/Title"
import { Minus, Plus } from "lucide-react"

function Faq() {
    const [open, setOpen] = useState<null | number>(null)
    const list = [
        {
            q: "quels sont les délais de livraison?",
            r: "Nos délais de livraison sont de 3 Heures pour Douala, Yaoundé et de 24 Heures pour les autres villes."
        },
        {
            q: "quels sont les moyens de paiements ?",
            r: "Vous pouvez payer en espèes ou par mobile money à l'agent de livraison dès réception de votre commande.",
            li: ["Soyez certain d'avoir le montant exact du paiement.", "Nous acceptons uniquement le paiement en FCFA"]
        },
        {
            q: "où etes vous situé ?",
            r: "Nous sommes basés à <bold>Ancien 3eme en face france optique</bold> pour la ville de Douala et <bold>Avenue kennedy orange</bold> pour Yaounde."
        },
        {
            q: "est-ce que tous les article vendus sont authentiques/neufs ?",
            r: "Nous nous engageons à ne proposer à nos clients que des produits 100% authentiques, neufs et originaux."
        }
    ]
    return (
        <div className="w-full mt-8 d flex justify-center flex-col items-center">
            <Title text="FAQ" />
            <div className="w-2/3 pb-4">
                {
                    list.map((el, i) => (
                        <div key={i} className={`py-4 ${i !== list.length - 1 && "border- border-b-[0.1px] border-[#92929271]"}`}>
                            <div onClick={() => setOpen((prev) => prev === i ? null : i)} className="w-full cursor-pointer flex gap-2 justify-center items-center ">
                                <span>
                                    {
                                        open === i ? <Minus className="text-2xl text-bold text-secondary font-bold" /> : <Plus className="text-2xl text-bold text-secondary font-bold" />
                                    }
                                </span>
                                <h1 className="text-center font-bold">{el.q.toLocaleUpperCase()} </h1>
                            </div>
                            {
                                open === i && <div className="w-full text-[18px]  text-secondary font-monserat px-8">
                                    <p className="text-center">{el.r} </p>
                                    {el.li && <ul className="w-full flex flex-col justify-center items-center text-center list-disc">
                                        {
                                            el.li.map((e, i) => (
                                                <li key={i} className="">{e} </li>
                                            ))
                                        }
                                    </ul>}
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq