import { useEffect, useState } from "react";
import useTitle from "../../../../Hooks/useTitle";


const PaymentHistory = () => {
    useTitle('Payment History')
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-five-murex.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPayments(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-6">All Payment History here</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, i) => <tr key={payment._id}>
                                <td>{i + 1}</td>
                                <td>{payment.transactionId}</td>
                                <td>${payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;