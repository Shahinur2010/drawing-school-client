
import SingleClass from "../../../SingleClass/SingleClass";
import usePopularInfo from "../../../../Hooks/usePopularinfo";


const PopularClasses = () => {
    const [popularData] = usePopularInfo();
    return (
        <>
            <h2 className='text-center font-bold text-3xl my-6'>Popular Classes</h2>
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    popularData.map((cls, i) => <SingleClass key={i} cls={cls}></SingleClass>)
                }
            </div>
        </>
    );
};

export default PopularClasses;

