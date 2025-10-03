import mockRecom from "@/data/phones.json"
import Phone from "../common/Phone"
function Recomandations() {
  return (
    <div className="flex flex-col gap-2  w-full px-6">
      <h1 className="text-2xl font-bold font-monserat text-center my-2 text-black">Nous vous récommandons également</h1>
      <div className="w-full flex overflow-x-scroll hide-scrollbar gap-2">
        {Array.from({ length: 10 }).map((_, i) => <Phone key={i} phone={mockRecom[0]} />)}
      </div>
    </div>
  )
}

export default Recomandations