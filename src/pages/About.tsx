import { Link } from "react-router-dom"
import aboutHeroImg from "../assets/about.png"

export default function About() {
    return <>
        <img src={aboutHeroImg} className="w-full" 
        alt="A man sits on his van, gazing up at the vast sky above." />
        <div className="p-9 flex flex-col gap-4">
            <h1 className="text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="text-xl">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)

            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="bg-[#FFCC8D] p-6 text-2xl font-bold rounded-md">
                Your destination is waiting.<br />
                Your van is ready.<br />
                <Link className="bg-[#161616] text-white text-xl rounded-md py-3 px-6 inline-block mt-3 font-medium" to='/vans'>Explore our vans</Link>
            </div>
        </div>
    </>
}