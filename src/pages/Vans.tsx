import React from "react"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
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
    const [searchParams, setSearchParams] = useSearchParams()

    React.useEffect(() => {
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const typeFilter = searchParams.get('type')
    const displayedVans = typeFilter ? vans?.filter(van => van.type === typeFilter) : vans

    const vanCards = displayedVans?.map(van => {

        return <div className="flex flex-col gap-3 no-underline text-black">
            <Link to={`/van/${van.id}`}>
                <img src={van.imageUrl} alt={van.description} className="w-full rounded-lg" />
            </Link>
            <div className="flex justify-between text-2xl font-bold">
                <span>{van.name}</span>
                <span>${van.price}/day</span>
            </div>
            <p className={`text-[#FFEAD0] py-2 px-4 m-0 rounded-lg inline-block text-xl self-start ${
                {
                    simple: 'bg-[#E17654]',
                    luxury: 'bg-[#161616]',
                    rugged: 'bg-[#115E59]'
                }[van.type]
            }`}>
                {van.type}
            </p>
        </div>
    })

    function handleFilterChange(type: string, filter: string) {
        setSearchParams(prevParams => {
            if(filter) {
                prevParams.set(type, filter)
            } else {
                prevParams.delete(type)
            }
            return prevParams
        })
    }

    return vans ? 
    <div className="p-10">
        <div className="flex flex-col gap-8 mb-4">
            <h1 className="text-xl font-medium m-0">Explore our van options</h1>
            <div className="flex gap-4 flex-wrap">
                <button 
                    className={`border-none rounded-md py-2 px-4 cursor-pointer text-xl
                    ${typeFilter==='simple' ? 'bg-[#E17654] text-[#FFEAD0]' : 'bg-[#FFEAD0] text-[#4D4D4D]'}`}
                    onClick={() => handleFilterChange('type', 'simple')}
                >Simple
                </button>
                <button 
                    className={`border-none rounded-md py-2 px-4 cursor-pointer text-xl
                    ${typeFilter==='luxury' ? 'bg-[#161616] text-[#FFEAD0]' : 'bg-[#FFEAD0] text-[#4D4D4D]'}`}
                    onClick={() => handleFilterChange('type', 'luxury')}>
                Luxury
                </button>
                <button 
                    className={`border-none rounded-md py-2 px-4 cursor-pointer text-xl
                    ${typeFilter==='rugged' ? 'bg-[#115E59] text-[#FFEAD0]' : 'bg-[#FFEAD0] text-[#4D4D4D]'}`}
                    onClick={() => handleFilterChange('type', 'rugged')}>
                Rugged
                </button>
                <button 
                    className="bg-transparent underline text-xl"
                    onClick={() => handleFilterChange('type', '')}>
                Clear
                </button>
            </div>
        </div>
        <div className="grid gap-12 grid-cols-[repeat(auto-fill,minmax(420px,1fr))]">
            {vanCards}
        </div>
    </div> 
    : <h1>Loading...</h1>
}