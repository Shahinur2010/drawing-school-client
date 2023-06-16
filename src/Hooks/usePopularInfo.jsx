import { useEffect, useState } from "react";

const usePopularInfo = () => {

    const [popularData, setPopularData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://assignment-12-server-five-murex.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setPopularData(data);
                setLoading(false)
            })
    }, [])

    return [popularData, loading]
}


export default usePopularInfo;