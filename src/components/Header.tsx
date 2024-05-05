import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
        <nav className="w-full bg-slate-800 h-12">
            <ul className="flex gap-3 ">
                <li className="ml-10 mt-2 hover:bg-slate-600 text-white"><Link to="/">Home</Link></li>
                <li className="mt-2 hover:bg-slate-600 text-white"> <Link to="/about">About us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header