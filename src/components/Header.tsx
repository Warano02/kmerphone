import { useEffect, useState } from "react";
import Logo from "@/assets/Logo-KMERPHONE_190x.png"
import { Link, useLocation } from "react-router";
import { useAppContext } from "@/hooks/useAppContext";
import { Plus, TextAlignJustify, UserRound, X } from "lucide-react";
function Header() {
    const { setIsSearching ,utilsLinks} = useAppContext()
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const tabs = [
        { label: "Accceuil", link: "/" },
        {
            label: "Nos Produits", children: [
                { label: "Smartphones", link: "/collections" },
                { label: "Samsung", link: "/collections/samsung" },
                { label: "Xiaomi", link: "/collections/xiamo" },
                { label: "Tecno", link: "/collections/tecno" },
                { label: "Infinix", link: "/collections/infinix" },
                { label: "ZTE", link: "/collection/zte" },
                { label: "Autre produits", link: "/collections" },
            ]
        },
        { label: "Blog", link: "/blog" },
        { label: "A propos", link: "/about" },
        { label: "FAQ", link: "/faq" },
        { label: "Contact", link: "/contact" },
    ]
    useEffect(() => {
        setIsHome(location.pathname === "/");
    }, [location.pathname]);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 0); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);
    return (
        <header className="w-full fixed top-0 z-2">
            <div className="w-full bg-primary text-center text-white p-2 text-[1em] font-monserat font-bold">
                Douala/Yaoundé : {utilsLinks.phone}
            </div>
            <nav className={`flex items-center justify-between px-6  py-4  ${isHome? (scrolled ? "bg-white":"bg-transparent"):"bg-white"} relative transition-all`}>
                <div className="sm:hidden flex justify-between items-center pb-4 gap-4">
                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden flex items-center gap-2 text-secondary font-bold">
                        {
                            open ? <X /> : <TextAlignJustify />
                        }
                        <span>Menu</span>
                    </button>
                    <Link to="/" className="block">
                        <img src={Logo} alt="Website Logo" className="w-" />
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="cursor-pointer p-2  hover:bg-gray-200 transition rounded-full" onClick={() => setIsSearching(prev => !prev)}>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="font-extrabold" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>


                        <Link to={"/cart"} className="relative cursor-pointer">
                            <svg
                                className="text-secondary"
                                width="18"
                                height="18"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <button className={`absolute -top-3 -right-3 text-xs text-white w-[18px] h-[18px] rounded-full bg-[#d60d0d] `}>3</button>
                        </Link>


                    </div>
                </div>

                <Link to="/" className="hidden sm:block">
                    <img src={Logo} alt="Website Logo" />
                </Link>

                <div className="hidden sm:flex items-center ">
                    {tabs.map((tab, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to={tab?.link || ""}
                                className="text-sm font-roboto font-bold text-secondary px-3 py-2 flex gap-1 "
                            >
                                {tab.label}
                                {tab.children && (
                                    <svg
                                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {tab.children && (
                                <ul className="absolute left-0 mt-2 w-60 bg-white text-secondary border border-gray-200 rounded shadow-md hidden  group-hover:block z-20">
                                    {tab.children.map((child, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={child.link}
                                                className={`block  text-sm font-roboto font-bold text-secondary  px-6 py-2 ${idx === 0 ? "pl-3" : ""}`}
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}


                </div>

                <div className="hidden sm:flex items-center gap-4 ">
                    <button className="cursor-pointer p-2  hover:bg-gray-200 transition rounded-full" onClick={() => setIsSearching(prev => !prev)}>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="font-extrabold" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <Link to={'/account'} className="relative cursor-pointer">
                        <UserRound />
                    </Link>
                    <Link to={"/cart"} className="relative cursor-pointer">
                        <svg
                            className="text-secondary"
                            width="18"
                            height="18"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <button className={`absolute -top-3 -right-3 text-xs text-white w-[18px] h-[18px] rounded-full bg-[#d60d0d] `}>3</button>
                    </Link>


                </div>
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white h-screen py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    {
                        tabs.map((tab, idx) => (
                            <Link key={idx} to={tab.link || tab.children?.[0]?.link || ""} className={`w-full text-secondary ${idx === tabs.length - 1 ? '' : "border-b-[0.5px]"}  py-3 px-1 flex justify-between items-center`}>
                                <span className="font-roboto font-bold">{tab.label} </span>
                                {tab.children && <Plus />}
                            </Link>
                        ))
                    }
                </div>

            </nav>
        </header>
    )
}

export default Header