
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Home/Home.css';
import { useContext, useEffect } from "react";
import useTitle from "../../../Hooks/useTitle";
import { ThemeContext } from '../../../Providers/ThemeProvider/ThemeProvider';
import TopSliders from './TopSliders/TopSliders';
import Sliders from './Sliders/Sliders'
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';


const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    useTitle('Home')
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (

<div className={`home ${theme}`}>
      <button className='btn btn-outline' onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
      {/* Rest of your home page content */}
      <div className="text-center py-4 text-lg">
                <h1 data-aos="fade-up mt-20">Welcome to Drawing School!</h1>
                <p data-aos="fade-left" data-aos-delay="200">Scroll down to explore more.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
                {/* Your content */}
                <TopSliders></TopSliders>
                <Sliders></Sliders>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
    </div>
    );
};

export default Home;