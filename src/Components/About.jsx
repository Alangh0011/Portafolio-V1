import  img  from "../assets/colage.jpg";
const About = () => {
    return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py:20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img data-aos="fade-up" src={img} width={290} height={290} className='text-green-500 hover:text-green-500 rounded-full glow p-2' alt="" />
            <div data-aos="fade-down" className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[40px] font-semibold mb-8 leading-normal text-green-500 hover:text-green-500">
                    ABOUT ME
                </h1>
                <p data-aos="fade-left">
                A computer systems engineer in training and a backend developer with an interest in DevOps. I am very passionate about technology and programming, which has led me to participate in competitions in different fields such as web3, blockchain and multidisciplinary, where I have learned, challenged myself and put my knowledge into practice. I love learning, belonging to communities that share the same tastes in technology, and collaborating with people from different disciplines and careers to make innovation. I believe that my career is very versatile, I never stop learning and I can make a change in society with my talent and my effort.
                </p>
                <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-green-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>

            </div>
    </div>

    );
}

export default About;
