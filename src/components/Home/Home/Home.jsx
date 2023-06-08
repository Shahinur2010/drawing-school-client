
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Home/Home.css';
import { useEffect } from "react";
import useTitle from "../../../Hooks/useTitle";


const Home = () => {
    useTitle('Home')
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-auto">
            <div className="text-center py-4 text-lg">
                <h1 data-aos="fade-up mt-20">Welcome to Drawing School!</h1>
                <p data-aos="fade-left" data-aos-delay="200">Scroll down to explore more.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
                {/* Your content */}
            </div>
        </div>
    );
};

export default Home;