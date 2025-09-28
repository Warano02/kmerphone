import { Link } from "react-router"

function Contact() {
    return (
        <div className="px-6 sm:px-14 flex flex-col gap-4 font-monserat text-secondary">
            <div className="hidden sm:flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium  border-b-[0.002px] border-[#5c59593b] mb-2">
                <Link to={"/"}>Acceuil</Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                </svg>
                <Link to={"/contact"}>NOUS CONTACTER</Link>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full sm:w-2/3 flex flex-col justify-center items-center gap-4 sm:px-14">
                    <h1 className="text-xl sm:text-2xl font-bold">NOUS CONTACTER</h1>
                    <p>Vous avez une question? Bien vouloir remplir le formulaire. Nous vous répondrons dans un délais de 24H.</p>
                    <form className="w-full flex flex-col gap-3 mt-2">
                        <input type="text" placeholder="Nom" className="w-full px-8 py-2 border border-[#9e9c9c65] text-[14px] outline-0" required />
                        <input type="email" placeholder="Email" className="w-full px-8 py-2 border border-[#9e9c9c65] text-[14px] outline-0" required />
                        <input type="number" placeholder="Numéro de téléphone" className="w-full px-8 py-2 border border-[#9e9c9c65] text-[14px] outline-0" required />
                        <textarea placeholder="Message" className="w-full px-8 py-2 border border-[#9e9c9c65] text-[14px] outline-0" required></textarea>
                        <div>
                            <button type="submit" className="px-4 py-3 m-2 rounded bg-primary text-white font-bold cursor-pointer">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact