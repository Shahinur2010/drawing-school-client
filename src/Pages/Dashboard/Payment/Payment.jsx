import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useTitle from "../../../Hooks/useTitle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    useTitle('Payment')
    const [classes, setClasses] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://assignment-12-server-five-murex.vercel.app/selectedclass')
            .then(res => res.json())
            .then(data => {
                const singlePrice = data.find((data) => data._id == id)
                setClasses(singlePrice)
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    
    console.log(id)
    
    
    console.log(classes)
    

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-6 uppercase">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={classes?.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;