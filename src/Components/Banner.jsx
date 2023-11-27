import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import  img  from "../assets/yo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            delay: 0,
            duration: 800
        });
    }, []);
    return (
        <div id="Banner" data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py:20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">
                    Welcome To <span className="text-green-500">My Website</span>
                </h1>
                <p data-aos="fade-left">
                Hello, I'm Alan Gomez, a backend developer who creates innovative and efficient solutions with quality code. I invite you to learn about my projects, where you can see my experience, my passion and my potential. If you are interested in my work, do not hesitate to contact me. I am open to new opportunities and challenges.
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="Flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/Alangh0011" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/alan-javier-g%C3%B3mez-hernandez/" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            
                            <a href="" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <FaTwitter className="text-[28px]"/>
                            </a>
                            
                            <a href="https://www.instagram.com/alan_gh.00/" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]"/>
                            </a>
                            
                            <a href="https://www.facebook.com/alan.gomez.925/" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <FaFacebookF className="text-[28px]"/>
                            </a>

                            <a href="mailto:alangh.1130@gmail.com" className="text-green-500 hover:text-green-500 rounded-full glow p-2">
                            <SiGmail className="text-[28px]" />
                            </a>

                            
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='text-green-500 hover:text-green-500 rounded-full glow p-2' alt="" />
        </div>

    );
}

export default Banner;
