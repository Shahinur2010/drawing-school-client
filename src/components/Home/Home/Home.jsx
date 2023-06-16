
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import '../Home/Home.css';
import { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import { ThemeContext } from '../../../Providers/ThemeProvider/ThemeProvider';
import TopSliders from './TopSliders/TopSliders';
import Sliders from './Sliders/Sliders'
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';


const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    useTitle('Home')

    return (

        <div className={`home ${theme}`}>
            <button className='btn btn-outline' onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </button>
            <div data-aos="zoom-in" data-aos-delay="400">
                {/* contents */}
                <TopSliders></TopSliders>
                <Sliders></Sliders>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;