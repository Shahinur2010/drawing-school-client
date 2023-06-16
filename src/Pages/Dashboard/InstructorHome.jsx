import useTitle from "../../Hooks/useTitle";


const InstructorHome = () => {
    useTitle('Instructor Home')
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Hello! Welcome to the Instructor Area</h1>
        </div>
    );
};

export default InstructorHome;