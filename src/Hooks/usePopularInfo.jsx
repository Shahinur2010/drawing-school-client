import { useEffect, useState } from "react";

// import { useQuery } from "@tanstack/react-query";
const usePopularInfo = () => {

    const [popularData, setPopularData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data=> {
            setPopularData(data);
            setLoading(false)
        })
    }, [])

    return [popularData, loading]
}

//     const { refetch, data: classes = [] } = useQuery({
//         queryKey: ['classes'],
//         queryFn: async () => {
//             const res = await fetch('https://bistro-boss-server-beryl.vercel.app/menu');
//             return res.json();
//         }
//     });

//     return [menu, loading, refetch]
// }

export default usePopularInfo;