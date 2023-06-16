import useTitle from "../../../Hooks/useTitle";


const UserHome = () => {
    useTitle('User Home')
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Hello! Welcome to the Public Area</h1>
        </div>
    );
};

export default UserHome;