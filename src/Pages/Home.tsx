import BestSeller from "@/components/Home/BestSeller"
import CollectionsPreview from "@/components/Home/CollectionsPreview"
import Faq from "@/components/Home/Faq"
import Hero from "@/components/Home/Hero"

function Home() {
    return (
        <>
            <Hero />
            <CollectionsPreview />
            <BestSeller />
            <Faq />
        </>
    )
}

export default Home