import { useAppContext } from "@/hooks/useAppContext"
import { Link } from "react-router"

function About() {
    const { AppName, utilsLinks } = useAppContext()
    return (
        <div className="px-6 sm:px-14">
            <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium  border-b-[0.002px] border-[#5c59593b] mb-2">
                <Link to={"/"}>Acceuil</Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                </svg>
                <Link to={"/collections"}>A propos</Link>
            </div>
            <div className="py-4 flex flex-col gap-4 font-monserat text-secondary">
                <h1 className="font-bold text-xl ">A propos</h1>
                <p className="">
                    <span className="font-bold">{AppName} </span> est une boutique en ligne spécialisée dans la vente de smartphones haute gamme qui vont faciliter votre vie quotidienne.
                </p>
                <p>
                    Nous pensons que chaque appareil que vous utilisez permet d'affirmer votre identité. C'est pourquoi notre équipe d'experts est sans cesse à la recherche de produits innovants. Votre excitation à la découverte de produit de qualité est notre priorité.
                </p>
                <p>
                    Nos produits ont comme points communs d'avoir un excellent rapport qualité prix et remettant en cause ce qui se fait depuis toujours.
                </p>
                <p>
                    <span className="font-semibold">{AppName} </span> vous permet aussi d'obtenir ces smartphones à des prix extrêmement bas puisqu'ils sont envoyés directement depuis le fabricant à votre adresse. Nous évitons ainsi la chaîne habituelle: Fabricant &gt; Importateur &gt; Distributeur &gt; Client avec les taxes et les frais de transport entre chaque étape, ce qui fait inévitablement augmenter les prix.
                </p>
                <h1 className="font-bold">GARANTIE DE SATISFACTION 100%</h1>
                <p>Nous offrons une Garantie de Satisfaction 100% durant 30 jours à compter de la réception du produit. Si vous n'êtes pas satisfait du produit, dites le nous et vous échangerons votre produit. </p>
                <h1>Vous avez des questions ?</h1>
                <p>N'hésitez pas à nous poser toutes vos question par email sur <span className="font-semibold">{utilsLinks.email} </span> Notre équipe se fera un plaisir d'y répondre le plus rapidement possible.  </p>
                <p>Vous pouvez aussi nous contacter sur <span className="font-semibold">notre page Facebook</span> via le Chat. </p>
                <p>{AppName} est une société basée au Cameroun à Akwa nouvelle rue bonadibong. </p>
                <p>Merci pour votre confiance</p>
                <p>L'équipe <span className="font-semibold">{AppName} </span> </p>
            </div>
        </div>
    )
}

export default About