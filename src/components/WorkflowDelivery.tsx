import { Img1, Img2, Img3, Img4 } from "./ui/Icon"

function WorkflowDelivery() {
    const tabs = [
        {
            label: "LIVRAISON RAPIDE",
            desc: "Nos délais de livraison sont de 3H pour Douala - Yaoundé et de 24H pour les autres villes.",
            src: <Img1 />
        },
        {
            label: "PAIEMENT A LA LIVRAISON",
            desc: "Payez en espèces ou par Mobile money dès que vous recevez votre commande.",
            src: <Img2 />
        },
        {
            label: "RETOUR FACILE ET RAPIDE",
            desc: "Nous proposons le Retour Facile et Rapide pendant 7 jours après réception des articles !",
            src: <Img3 />
        },
        {
            label: "SERVICE CLIENT 24/7",
            desc: "Notre équipe est à votre disposition pour toutes questions sur nos articles ou votre commande.",
            src: <Img4 />
        }
    ]
    return (
        <div className="w-full flex gap-1 flex-wrap justify-center">
            {
                tabs.map((tab, i) => (
                    <div key={i} className="w-[300px] min-h-1">
                        <div className="w-full h-[100px] flex justify-center">
                            {tab.src}
                        </div>
                        <h1 className="w-full text-center text-secondary font-bold font-monserat mb-2">{tab.label} </h1>
                        <p className="w-full px-2 text-center text-secondary font-monserat">
                            {tab.desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default WorkflowDelivery