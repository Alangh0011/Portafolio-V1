import { FaJs, FaHtml5, FaCss3, FaJava, FaPython, FaReact, FaDatabase, FaGit, FaGithub, FaLinux, FaFigma, FaCode } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { DiDjango } from 'react-icons/di';
import { IoLogoFirebase } from "react-icons/io5";
import { SiIntellijidea } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { RiNotionFill } from "react-icons/ri";
import { SiVisualstudio } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";

const skills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3 className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-indigo-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-600" /> },
    { name: 'React', icon: <FaReact className="text-blue-300" /> },
    { name: 'C', icon: <FaCode className="text-blue-600" /> },
    { name: 'C#', icon: <TbBrandCSharp className="text-blue-600" /> },
    { name: 'SQL', icon: <FaDatabase className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Notion', icon: <RiNotionFill className="text-white" /> },
    { name: 'Figma', icon: <FaFigma className="text-red-500" /> },
    { name: 'Spring Boot', icon: <BiLogoSpringBoot className="text-green-500" /> },
    { name: 'Tailwind CSS', icon: <FaCss3 className="text-blue-500" /> },
    { name: 'Microsoft Azure', icon: <VscAzure className="text-blue-600" /> },
    { name: 'Firebase', icon: <IoLogoFirebase className="text-orange-500" /> },
    { name: 'Git', icon: <FaGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
    { name: 'Visual Studio Code', icon: <SiVisualstudio className="text-blue-500" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-blue-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-black" /> },
    { name: 'Django', icon: <DiDjango className="text-green-500" /> },
    { name: 'ShellScript', icon: <VscTerminalPowershell className="text-white" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-300"/>}
    // Agrega las demás habilidades aquí
    ];

  const Services = () => {
    return (
        <div id="Services" className="p-20 flex-col items-center justify-center">
            <h1 data-aos="fade-up" className="text-[40px] font-semibold mb-20 leading-normal text-green-500">
            Skills
            </h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-20' >
                {skills.map((skill, index) => (
                <div data-aos="fade-right" key={index} className="bg-gray-800 p-6 rounded-lg text-white flex flex-col items-center justify-center h-15 w-15 glow">
                    <span className="mb-4 text-2xl">{skill.icon}</span>
                    <h2 className="text-lg font-semibold ">{skill.name}</h2>
                </div>
                ))}
        </div>
                
            
        </div>
    );
}

export default Services;
