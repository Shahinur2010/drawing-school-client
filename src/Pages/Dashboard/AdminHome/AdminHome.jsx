import useTitle from "../../../Hooks/useTitle";


const AdminHome = () => {
    useTitle('Admin Home')
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Hello! Welcome to the Admin Area</h1>
        </div>
    );
};

export default AdminHome;