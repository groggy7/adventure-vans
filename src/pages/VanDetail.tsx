import React from "react";
import { Link, useParams } from "react-router-dom";
import back from "../assets/back.svg"

interface Van {
    id: number
    name: string
    price: number
    description: string
    imageUrl: string
    hostId: number
    type: string
}

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState<Van | null>(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [])


    return !van ? 
        <h1>Loading...</h1> : 
        <div className="van-detail-page">
            <Link className="back-to-all-vans" to='/vans'>
                <img src={back} alt="back button" />
                <p>Back to all vans</p>
            </Link>
            <img src={van.imageUrl} alt={van.description} className="van-detail-img"/>
            <p className={`van-type ${van.type} van-detail-type`}>{van.type}</p>
            <h1>{van.name}</h1>
            <p>{van.description}</p>
            <button className="rent-btn">Rent this van</button>
        </div>
}