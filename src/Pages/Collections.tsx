import { useParams } from "react-router"
import AllCollections from "@/components/collections/AllCollections"
import ProductsCollection from "@/components/collections/ProductsCollection"

function Collections() {
  const { m } = useParams()

  if (!m) return <AllCollections />
  return <ProductsCollection m={m}  />
}

export default Collections
