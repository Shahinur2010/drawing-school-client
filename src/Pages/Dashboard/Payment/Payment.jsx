import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useTitle from "../../../Hooks/useTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    useTitle('Payment')
    // const price = parseFloat(price.toFixed(2));
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-6 uppercase">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;