import useTitle from "../../../Hooks/useTitle";


const EnrolledClasses = () => {
    useTitle('Enrolled Classes')
    return (
        <div>
            <h2>Students have already purchased this class</h2>
        </div>
    );
};

export default EnrolledClasses;