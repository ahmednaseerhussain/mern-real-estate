import { Search } from "lucide-react"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
        <header className="bg-slate-200 shadow-md">
           <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-400">Real</span>
            <span className="text-slate-800">Homi</span>
            </h1>
            </Link>
            <form className="bg-white flex items-center rounded-lg p-2 ">
                <input type="text" placeholder="Searching..." className="focus:outline-none w-24 sm:w-64"/>
                <Search className="text-slate-500" />
            </form>
            <ul className="flex gap-4">
              <Link to="/">
              <li className="hidden sm:inline  text-slate-500 hover:text-slate-800 cursor-pointer ">
                Home        
              </li>
              </Link>
              <Link to="/profile">
              <li className="hidden sm:inline  text-slate-500 hover:text-slate-800 cursor-pointer ">
                Profile        
              </li>
              </Link>
              <Link to="/about">
              <li className="hidden sm:inline  text-slate-500 hover:text-slate-800 cursor-pointer ">
                About       
              </li>
              </Link>
              <Link to="/signup">
              <li className="hidden sm:inline  text-slate-500 hover:text-slate-800 cursor-pointer ">
                Sign Up        
              </li>
              </Link>
              <Link to="/login">
              <li className=" text-slate-500 hover:text-slate-800 cursor-pointer ">
                Login        
              </li>
              </Link>
            </ul>
           </div>
        </header>
    </>
  )
}
