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
        return <div className="host-van-card" key={van.id}>
            <img src={van.imageUrl} alt={van.description} />
            <div className="host-van-card-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <button className="edit-btn right-aligned">Edit</button>
        </div>
    })

    return <div className="dashboard-listed-vans">
        <div>
            <div className="dashboard-listed-vans-header">
                <h2 className="host-van-page larger-text">Your listed vans</h2>
                <button>View all</button>
            </div>
            <div className="host-van-cards">
                {vanCards}
            </div>
        </div>
    </div>
}