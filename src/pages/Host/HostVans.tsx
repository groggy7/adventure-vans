import React from "react"

interface Van {
    id: number
    name: string
    price: number
    description: string
    imageUrl: string
    hostId: number
    type: string
}

export default function HostVans() {
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
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <button className="ml-auto">Edit</button>
        </div>
    })

    return <div>
        <div className="py-8 px-10 flex flex-col gap-4">
            <div className="flex justify-between">
                <h2 className="text-2xl">Your listed vans</h2>
                <button>View all</button>
            </div>
            <div className="flex flex-col gap-4">
                {vanCards}
            </div>
        </div>
    </div>
}