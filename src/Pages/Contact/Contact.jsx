
import { FaPhoneAlt, FaMapMarkerAlt, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";


const Contact = () => {
    useTitle('Contact')

    return (
        <div className='text-center'>
            <h2 className='text-center font-bold text-3xl my-4'>Contact Us</h2>
            <h2 className='font-semibold text-lg my-3'><FaPhoneAlt className='text-center mx-auto' /> Phone: 088-8888-8888</h2>
            <h2 className='font-semibold text-lg mb-3'><FaWhatsapp className='text-center mx-auto' /> Whatsapp: 000-888-777</h2>
            <h2 className='font-semibold text-lg mb-3'><FaRegEnvelope className='text-center mx-auto' /> Email: drawing@school.com</h2>
            <h2 className='font-semibold text-lg'><FaMapMarkerAlt className='text-center mx-auto' />55/M R Datta road lane, New Delhi.</h2>
        </div>
    );
};

export default Contact;