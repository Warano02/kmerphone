import { RouterProvider } from "react-router"
import { AppProvider } from "./Provider/AppProvider"
import { routes } from "./router/router"
import { ShopProvider } from "./Provider/ShopProvider"
import { AdminProvider } from "./Provider/AdminProvider"

function App() {

  return (
    <AppProvider>
      <ShopProvider>
        <AdminProvider>
          <RouterProvider router={routes} />
        </AdminProvider>
      </ShopProvider>
    </AppProvider>
  )
}

export default App
