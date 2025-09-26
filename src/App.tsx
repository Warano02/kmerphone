import { RouterProvider } from "react-router"
import { AppProvider } from "./Provider/AppProvider"
import { routes } from "./router/router"

function App() {

  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  )
}

export default App
