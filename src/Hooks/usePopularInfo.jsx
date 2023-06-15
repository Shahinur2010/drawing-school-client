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


export default usePopularInfo;