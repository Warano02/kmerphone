import { Link, Outlet, useLocation } from "react-router";
import Logo from "@/assets/Logo-KMERPHONE_190x.png"
const AdminLayout = () => {
  const location = useLocation()
  const dashboardicon = (
    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
    </svg>
  );

  const overviewicon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-combine-icon lucide-combine"><path d="M10 18H5a3 3 0 0 1-3-3v-1" /><path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" /><path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" /><path d="m7 21 3-3-3-3" /><rect x="14" y="14" width="8" height="8" rx="2" /><rect x="2" y="2" width="8" height="8" rx="2" /></svg>
  );

  const chaticon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
  );

  const sidebarLinks = [
    { name: "Dashboard", path: "/d", icon: dashboardicon },
    { name: "Collections", path: "/d/collections", icon: overviewicon },
    { name: "Produits", path: "/d/products", icon: chaticon },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/d">
          <img className="h-9" src={Logo} alt="dummyLogoColored" />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Salut Admin! </p>
          <button className='text-white cursor-pointer rounded-full text-sm px-4 py-1 bg-red-600'>Deconnexion</button>
        </div>
      </div>

      <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
        {sidebarLinks.map((item, index) => (
          <a href={item.path} key={index}
            className={`flex items-center py-3 px-4 gap-3 
                            ${location.pathname === item.path ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                : "hover:bg-gray-100/90 border-white text-gray-700"
              }`
            }
          >
            {item.icon}
            <p className="md:block hidden text-center">{item.name}</p>
          </a>
        ))}
        <div className={` ml-16 md:ml-64 relative`}>
          <Outlet />
        </div>
      </div>

    </>
  );
};

export default AdminLayout