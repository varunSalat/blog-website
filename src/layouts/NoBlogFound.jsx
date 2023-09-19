import { Link } from "react-router-dom"

const NoBlogFound = () => {
  return (
    <div className="h-[500px] ">
        <div className="mt-[8em] text-center">
            <h1 className="text-2xl mb-9" >No Blog Listed on this search</h1>
            <Link to={"/"} className=" mt-4 text-xl bg-primary w-fit px-4 py-2 rounded-md text-white">Home</Link>
        </div>
    </div>
  )
}

export default NoBlogFound
