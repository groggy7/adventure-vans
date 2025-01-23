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
        <div className="p-10 text-[#161616] flex flex-col gap-4">
            <Link className="flex text-[#201F1D] gap-2" to='/vans'>
                <img src={back} alt="back button" className="w-5" />
                <p>Back to all vans</p>
            </Link>
            <img src={van.imageUrl} alt={van.description} className="w-full max-w-[600px] rounded-lg"/>
            <p className={`text-[#FFEAD0] py-2 px-4 rounded-lg inline-block text-xl self-start ${{
                simple: 'bg-[#E17654]',
                luxury: 'bg-[#161616]',
                rugged: 'bg-[#115E59]'
            }[van.type]}`}>{van.type}</p>
            <h1 className="text-xl">{van.name}</h1>
            <p>{van.description}</p>
            <button className="w-full p-3 bg-[#FF8C38] text-white rounded-lg border-none text-2xl cursor-pointer">Rent this van</button>
        </div>
}
/* {
    simple: 'bg-[#E17654]',
    luxury: 'bg-[#161616]',
    rugged: 'bg-[#115E59]'
}[van.type] */