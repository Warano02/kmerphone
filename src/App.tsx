import { RouterProvider } from "react-router"
import { AppProvider } from "./Provider/AppProvider"
import { routes } from "./router/router"
import { ShopProvider } from "./Provider/ShopProvider"

function App() {

  return (
    <AppProvider>
      <ShopProvider>
        <RouterProvider router={routes} />
      </ShopProvider>
    </AppProvider>
  )
}

export default App
