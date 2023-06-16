
import SingleInstructor from "../../../SingleInstructor/SingleInstructor";
import usePopularInfo from "../../../../Hooks/usePopularinfo";


const PopularInstructors = () => {
    const [popularData] = usePopularInfo();
    return (
        <div className="mt-6">
            <h2 className='text-center font-bold text-3xl my-6'>Popular Instructors</h2>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    popularData.map((ins, i) => <SingleInstructor key={i} ins={ins}></SingleInstructor>)
                }
            </div>


        </div>
    );
};

export default PopularInstructors;


