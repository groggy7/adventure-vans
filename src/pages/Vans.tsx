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
        return <div className="van-card">
            <Link to={`/van/${van.id}`}>
                <img src={van.imageUrl} alt={van.description} className="van-image" />
            </Link>
            <div className="van-info">
                <span>{van.name}</span>
                <span>${van.price}/day</span>
            </div>
            <p className={`van-type ${van.type}`}>{van.type}</p>
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
    <div className="van-page">
        <div className="van-page-header-container">
            <h1 className="van-page-header">Explore our van options</h1>
            <div className="van-filter-btns">
                <button 
                    className={`van-filter-btn ${typeFilter==='simple' ? 'selected-simple' : ''}`}
                    onClick={() => handleFilterChange('type', 'simple')}
                >Simple
                </button>
                <button 
                    className={`van-filter-btn ${typeFilter==='luxury' ? 'selected-luxury' : ''}`}
                    onClick={() => handleFilterChange('type', 'luxury')}>
                Luxury
                </button>
                <button 
                    className={`van-filter-btn ${typeFilter==='rugged' ? 'selected-rugged' : ''}`}
                    onClick={() => handleFilterChange('type', 'rugged')}>
                Rugged
                </button>
                <button 
                    className="van-filter-btn clear"
                    onClick={() => handleFilterChange('type', '')}>
                Clear
                </button>
            </div>
        </div>
        <div className="van-cards">
            {vanCards}
        </div>
    </div> 
    : <h1>Loading...</h1>
}