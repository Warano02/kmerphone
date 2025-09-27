import { useEffect, useState } from "react"
import { useParams } from "react-router"
import mockPhones from "@/data/phones.json"
import AllCollections from "@/components/collections/AllCollections"
import ProductsCollection from "@/components/collections/ProductsCollection"
function Collections() {
  const [phones, setPhone] = useState(mockPhones)
  const { m } = useParams()

  useEffect(() => {
    if (!m) return
    setPhone(() => phones.filter(el => el.brand === m))
  }, [m, phones])

  if (!m) return <AllCollections />
  if (m) return <ProductsCollection m={m}/>

}

export default Collections