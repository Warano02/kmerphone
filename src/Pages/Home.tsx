import BestSeller from "@/components/Home/BestSeller"
import CollectionsPreview from "@/components/Home/CollectionsPreview"
import Hero from "@/components/Home/Hero"

function Home() {
    return (
        <>
            <Hero />
            <CollectionsPreview />
            <BestSeller />
        </>
    )
}

export default Home