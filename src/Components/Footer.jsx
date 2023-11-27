import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import img from "../assets/logo.jpg";
const Footer = () => {
    const phoneNumber = '+525591652732';
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid gridcols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <img src={img} width={70} height={70} className='rounded-full' alt="" />
                    <span className="text-[22px] font-semibold text-green-500 py-2 uppercase">
                    Alan Gomez - Backend Developer
                    </span>
                    <p className="text-[16px] my-4"> Did you like my work? Contact me:  
                    <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">
                        +525591652732 
                    </a>
                        <br></br>and let's make your project a reality.
                    </p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-green-500 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-Commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-green-500 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">
                        <a href="mailto:alangh.1130@gmail.com" className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer">
                            alangh.1130@gmail.com
                        </a>
                    </p>
                    <p className="text-[16px] my-4">
                        <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition border-b-2 border-slate-900 hover:border-green-400 cursor-pointer ">
                            +525591652732 
                        </a>
                    </p>
                </div>
                <div>
                <h2 className="text-[22px] font-semibold text-green-500 py-2 uppercase">Follow Me</h2>
                <div className="flex space-x-4">
                            <a href="https://github.com/Alangh0011" className="text-white hover:text-green-500 transition-all duration-150 ease-in-out">
                            <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/alan-javier-g%C3%B3mez-hernandez/" className="text-white hover:text-green-500 transition-all duration-150 ease-in-out">
                            <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            
                            <a href="" className="text-white hover:text-green-500 transition-all duration-150 ease-in-out">
                            <FaTwitter className="text-[28px]"/>
                            </a>
                            
                            <a href="https://www.instagram.com/alan_gh.00/" className="text-white hover:text-green-500 transition-all duration-150 ease-in-out">
                            <FaInstagram className="text-[28px]"/>
                            </a>
                            
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
