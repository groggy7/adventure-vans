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
        return <div className="host-van-card" key={van.id}>
            <img src={van.imageUrl} alt={van.description} />
            <div className="host-van-card-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <button className="edit-btn right-aligned">Edit</button>
        </div>
    })

    return <div className="dashboard">
        <div className="dashboard-welcome">
            <div>
                <h1 className="dashboard-header">Welcome!</h1>
                <div className="dashboard-header-summary">
                    <p className="dashboard-header-summary-text">
                        Income in last <span className="underline bold">30 days</span>
                    </p>
                    <button className="details-btn">Details</button>
                </div>
                <p className="income">$2,260</p>
            </div>
        </div>
        <div className="dashboard-review">
            <div>
                <span className="bold">Review score</span>
                <span>
                    <img src={star} alt="star icon" className="review-point" />
                    <span className="bold">5.0</span>/5
                </span>
                <button className="details-btn right-aligned">Details</button>
            </div>
        </div>
        <div className="dashboard-listed-vans">
            <div>
                <div className="dashboard-listed-vans-header">
                    <h2>Your listed vans</h2>
                    <button>View all</button>
                </div>
                <div className="host-van-cards">
                    {vanCards}
                </div>
            </div>
        </div>
    </div>
}