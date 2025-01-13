import { Link } from "react-router-dom"
import aboutHeroImg from "../assets/about.png"

export default function About() {
    return <>
        <img src={aboutHeroImg} className="about-hero-img" alt="A man sits on his van, gazing up at the vast sky above." />
        <div className="about-page">
            <h1 className="about-header">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="about-text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)

            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="explore-van-section">
                Your destination is waiting.<br />
                Your van is ready.<br />
                <Link className="about-find-van-btn" to='/vans'>Explore our vans</Link>
            </div>
        </div>
    </>
}