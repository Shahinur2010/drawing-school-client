import useTitle from "../../../../Hooks/useTitle";


const PaymentHistory = () => {
    useTitle('Payment History')
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-6">All Payment History here</h2>
        </div>
    );
};

export default PaymentHistory;