import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Footer from './Components/Footer'
import { RotatingTriangles } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }
    , 1500);
  }, []);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
    {loading ?
      <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
        <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={['#008000', '#FF69B4', '#00FFFF']}

      />
      </div>

      :
      
      <div className="bg-slate-900 relative">
      <Nav />
      <Banner/> 
      <About />
      <Services />
      <Projects />
      <Contact />
      <Link
        to="Banner"  
        smooth={true}
        spy={true}
        duration={500}
        className={`text-green-500 hover:text-green-500 rounded-full glow p-2 fixed bottom-4 right-4 cursor-pointer ${showScroll ? 'block' : 'hidden'}`}
      >
        <FaArrowAltCircleUp className="text-[28px]"/>
      </Link>
      <Footer />
    </div>

    }
    </>
  );
}
export default App;
