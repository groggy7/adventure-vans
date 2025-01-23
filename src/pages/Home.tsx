import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="bg-home bg-no-repeat bg-center bg-cover h-[80vh] text-white
        flex flex-col justify-center items-center gap-4 p-10 text-center">
            <div className="flex flex-col gap-3 bg-black bg-opacity-30 rounded p-2 max-w-[80vw] md:text-lg">
                <h1>You got the travel plans, we got the travel vans</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <Link to='/vans' className="bg-find_van_btn text-white p-4 w-full rounded max-w-[80vw]">Find your van</Link>
        </div>
    )
}