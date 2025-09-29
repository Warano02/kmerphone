
function SignUp() {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-2 font-monserat">
            <h1 className="font-bold text-xl text-center font-roboto"> Créer le compte</h1>
            <form className="flex flex-col gap-4 justify-center items-center mt-4 w-1/3">
                <input type="text" placeholder="Prénom" className="px-4 py-2 rounded border border-[#8a8080a8] outline-0 w-full " />
                <input type="text" placeholder="Nom" className="px-4 py-2 rounded border border-[#8a8080a8] outline-0 w-full " />
                <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-[#8a8080a8] outline-0 w-full " />
                <input type="password" placeholder="Mot de passe" className="px-4 py-2 rounded border border-[#8a8080a8] outline-0 w-full" />
                <button type="submit" className="px-4 py-2 rounded bg-primary text-white font-semibold cursor-pointer">Valider</button>
            </form>
        </div>
    )
}

export default SignUp