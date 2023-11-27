import  img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[40px] font-semibold mb-20 leading-normal text-green-500">
            Projects
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <img data-aos="fade-down"src={img1} alt="" className="flex items-center rounded-3xl h-36 w-44 border-2 justify-center border-slate-800 b_glow"></img>
                <img data-aos="fade-up"src={img2} alt="" className="flex items-center rounded-3xl h-36 w-44 border-2 justify-center border-slate-800 b_glow"></img>
                <img data-aos="fade-down"src={img3} alt="" className="flex items-center rounded-3xl h-36 w-44 border-2 justify-center border-slate-800 b_glow"></img>
                <img data-aos="fade-up"src={img4} alt="" className="flex items-center rounded-3xl h-36 w-44 border-2 justify-center border-slate-800 b_glow"></img>
                
            </div>
        </div>
    );
}

export default Projects;
