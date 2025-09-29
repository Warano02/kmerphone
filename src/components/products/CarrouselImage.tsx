import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
    images: string[],
    currentImage: number,
    setCurrentImage: React.Dispatch<React.SetStateAction<number>>

}
function CarrouselImage({ images, currentImage, setCurrentImage }: Props) {
    return (

        <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-3xl relative">
                <div className="w-full h-32 absolute bottom-1/2  flex justify-between items-center">
                    <button className="h-full w-28 cursor-pointer flex items-center justify-center pr-4" onClick={() => setCurrentImage((prev) => prev > 0 ? prev - 1 : prev)}><ChevronLeft className="h-full w-[50px]" /> </button>
                    <button className="h-full w-28 cursor-pointer flex items-center justify-center pl-4" onClick={() => setCurrentImage((prev) => prev < images.length - 1 ? prev + 1 : prev)}><ChevronRight className="h-full w-[50px]" /></button>
                </div>
                <img src={images[currentImage]} className="w-full rounded-lg " alt="Main Image" />
            </div>

            <div className="grid grid-cols-4 max-w-3xl gap-4" id="thumbnail-container">
                {
                    images.map((src, idx) => (
                        <img src={src} key={idx} onClick={() => setCurrentImage(idx)} alt="Items of images table" className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" />
                    ))
                }
            </div>
        </div>

    )
}

export default CarrouselImage