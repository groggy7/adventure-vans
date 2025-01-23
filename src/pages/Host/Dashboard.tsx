import React from "react"
import star from "../../assets/star.svg"

interface Van {
    id: number
    name: string
    price: number
    description: string
    imageUrl: string
    hostId: number
    type: string
}

export default function Dashboard() {
    const [vans, setVans] = React.useState<Van[] | null>(null)

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanCards = vans?.map(van => {
        return <div className="flex gap-8 bg-white py-4 px-6" key={van.id}>
            <img src={van.imageUrl} alt={van.description} className="w-[120px] rounded-lg" />
            <div className="flex flex-col justify-center gap-3">
                <h3 className="">{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <button className="text-md self-center ml-auto">Edit</button>
        </div>
    })

    return <div>
        <div className="bg-[#FFEAD0] mt-6">
            <div className="py-8 px-10">
                <h1 className="text-4xl m-0">Welcome!</h1>
                <div className="flex justify-between mt-2">
                    <p>Income in last <span className="underline bold">30 days</span></p>
                    <button className="bg-transparent border-none font-medium mt-2">Details</button>
                </div>
                <p className="text-5xl font-bold mt-4">$2,260</p>
            </div>
        </div>
        <div className="bg-[#FFDDB2]">
            <div className="flex gap-5 py-8 px-10">
                <span className="font-bold text-xl">Review score</span>
                <span className="flex gap-1 items-center">
                    <img src={star} alt="star icon" className="review-point" />
                    <span className="bold">5.0</span>/5
                </span>
                <button className="bg-transparent border-none font-medium cursor-pointer ml-auto">Details</button>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="py-8 px-10 flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Your listed vans</h2>
                    <button className="bg-transparent border-none font-medium cursor-pointer">View all</button>
                </div>
                <div className="flex flex-col gap-4">
                    {vanCards}
                </div>
            </div>
        </div>
    </div>
}