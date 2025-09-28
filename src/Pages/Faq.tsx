import { useAppContext } from "@/hooks/useAppContext"
import { Link } from "react-router"

function Faq() {
    const { utilsLinks } = useAppContext()
    const questions = [
        {
            q: "Où livrons-nous et quels sont les frais de livraison ?",
            r: "Nous livrons a Douala et Yaounde et nous expedions dans les autres villes.\nLes frais de livraison sont payants de base."
        },
        {
            q: "Où êtes vous situé ?",
            r: "Nous sommes basé à Ancien 3eme en face france optique pour la ville de Douala et Avenue Kennedy orange pour Yaounde."
        },
        {
            q: "Qui livre mon article ?",
            r: "Vos articles sont livé oar nos agents de livraison."
        },
        {
            q: "Quelle sont les horaires de livraison ?",
            r: "Les articles sont livés entre 9H à 17H."
        },
        {
            q: "Que se passe-t-il si personne n'est à la maison ?",
            r: "Votre colis sera laissé à votre bureau de poste où vous pourrez le retirer."
        },
        {
            q: "Je me suis trompéd'adresse de livraison, que faire ?",
            r: "Ne vous inquitez pas, si votre commande n'a pas encore été envoyé, contactez nous immédiatement et nous serons ravis de mettre vos informations à jour. Dans le cas contraire et conformément à nos conditions générales de ventes, une fois qu'une commande a été envoyée depuis notre entrepôt, plus aucune modification ne peut être effectuée. "
        },
        {
            q: "Il manque des articles à ma commande, où sont-ils ?",
            r: "Nous travaillons avec plusieurs fournisseurs, lorsque vous passez commande, chaque fournisseur se charge d'un produit en particulier. Si vous commandez 5 des moments différents (certain seront plus rapides, d'autre plus lents). Par contre si vous commandez 3 fois le même produits, alors tous envoyés dans 1n seul colis."
        }
    ]
    return (
        <div className="px-6 sm:px-14 flex flex-col gap-4 font-monserat text-secondary">
            <div className="hidden sm:flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium  border-b-[0.002px] border-[#5c59593b] mb-2">
                <Link to={"/"}>Acceuil</Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                </svg>
                <Link to={"/faq"}>Faq</Link>
            </div>
            <h1 className="text-2xl font-bold text-center sm:text-start sm:px-4 mb-6"> FAQ</h1>
            <h1 className="font-bold text-primary text-2xl">{"expédition & livraison".toLocaleUpperCase()} </h1>
            <h2 className="font-bold">- Combien de temps faut-il pour une commande ? </h2>
            <p>Nous livrons le jour même un délai <span className="font-bold">3 Heures.</span> </p>
            {
                questions.map((question, idx) => (
                    <>
                        <h2 className="font-bold" key={idx}>- {question.q} </h2>
                        <p> {question.r} </p>
                    </>
                ))
            }
            <h1 className="font-bold text-primary text-2xl">PAIEMENT</h1>
            <h2 className="font-bold">- Votre site est il sécurisé ? </h2>
            <p>Ce site est 100% sécursé. Et à dire vrai, on pourrait même affirmer qu'il l'est à 300%.</p>
            <h2 className="font-bold">- Quels sont les modes de paiements ?</h2>
            <p>Vous pouvous payer en espèce ou par mobile money à l'agent de livraison dès réception de votre commande.</p>
            <ul>
                <li>Soyez centain d'avoir le montant exact du paiement.</li>
                <li>Nous acceptons uniquement le âiement en FCFA.</li>
            </ul>
            <h1 className="font-bold text-primary text-2xl">RETOURS & REMBOURSEMENTS</h1>
            <h2 className="font-bold">- Comment cela se passe si je ne suis pas satisfait de mon produit ? </h2>
            <p>Nous proposons <span className="font-bold">Un Retour Facile et Rapide !</span><br />Si, pour n'importe qu'elle raison, le produit a un soucis, vous pouvez nous le renvoyer sous <span>30 jours</span> après réception et <span className="font-bold">nous vous échangerons l'article</span> de l'article dans nos magasins.</p>
            <p>Cependant, tous les produits renvoyés soivent être en parfait état.</p>
            <h1 className="font-bold text-primary text-2xl">AUTRE</h1>
            <h2 className="font-bold">- Partenariats et parrainage</h2>
            <p>Nous n'avons actuellement aucun programme de parrainage ou de partenariat à ce jour. Cependant, si vous avez de bonnes idées, n'hésitez pas à nous envoyer un email.</p>
            <h2 className="font-bold">Encore des questions ? </h2>
            <p>Si vous avez encore la moindre question, vous pouvez nous contactez par email à {utilsLinks.email}. </p>
            <img src="https://cdn.shopify.com/s/files/1/2343/2703/files/satisfaction_large.png?v=1504894252" alt="100% satisfaction" width={102}/>
            <p>Votre Satisfaction est Garantie à 100% !</p>
        </div>
    )
}

export default Faq