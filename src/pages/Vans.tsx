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

export default function Vans() {
    const [vans, setVans] = React.useState<Van[] | null>(null)

    React.useEffect(() => {
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanCards = vans?.map(van => {
        return <div className="van-card">
            <img src={van.imageUrl} alt={van.description} className="van-image" />
            <div className="van-info">
                <span>{van.name}</span>
                <span>${van.price}/day</span>
            </div>
            <p className={`van-type ${van.type}`}>{van.type}</p>
        </div>
    })

    return vans ? 
    <div className="van-page">
        {vanCards}
    </div> 
    : <h1>Loading...</h1>
}