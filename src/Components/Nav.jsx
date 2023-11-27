import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";
import img from "../assets/logo.jpg";
const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to = "Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to = "About">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
            </Link>
            <Link spy={true} smooth={true} to = "Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
            </Link>
            <Link spy={true} smooth={true} to = "Projects">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to = "Contact">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
            </Link>
        </ul>
    </div>
    </>
    return (
        
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <div className="flex items-center flex-1">
                <img src={img} width={70} height={70} className='rounded-full' alt="" />
                    <span className="text-3x1 font-bold">Alan Gomez</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to = "Home">
                            <li className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "About">
                            <li className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Services">
                            <li className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">Skills</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Projects">
                            <li className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Contact">
                            <li className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">Contact</li>
                        </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
}

export default Nav;
