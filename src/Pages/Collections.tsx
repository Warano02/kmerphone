import { useEffect, useState } from "react"
import { useParams } from "react-router"
import mockPhones from "@/data/phones.json"
import AllCollections from "@/components/collections/AllCollections"
function Collections() {
    const [phones, setPhone] = useState(mockPhones)
    const { m } = useParams()

    useEffect(() => {
        if (!m) return
        setPhone(() => phones.filter(el => el.brand === m))
    }, [m, phones])

  if (!m) return <AllCollections/> 
  
}

export default Collections