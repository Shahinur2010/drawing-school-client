
import SingleClass from "../../../SingleClass/SingleClass";
import usePopularInfo from "../../../../Hooks/usePopularinfo";


const PopularClasses = () => {
    const [popularData] = usePopularInfo();
    // const [classes, setClasses] = useState([]);
    // useEffect(()=> {
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setClasses(data)
    //     })
    // }, [])
    return (
        <> <h2 className='text-center font-bold text-3xl my-6'>Popular Classes</h2>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                popularData.map((cls, i) => <SingleClass key={i} cls={cls}></SingleClass>)
            }
        </div>
        </>
    );
};

export default PopularClasses;



// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import MenuItem from "../../shared/MenuItem/MenuItem";
// import useMenu from "../../../hooks/useMenu";


// const PopularMenu = () => {
//     const [menu] = useMenu();
//     const popular = menu.filter(item => item.category === 'popular') || [];
    
//     return (
//         <section className="mb-12">
//             <SectionTitle
//                 heading="From Our Menu"
//                 subHeading="Popular Items">
//             </SectionTitle>
//             <div className="grid md:grid-cols-2 gap-10">
//                 {
//                     popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
//                 }
//             </div>
//             <div className="text-center">
//                 <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
//             </div>
//         </section>
//     );
// };

// export default PopularMenu;