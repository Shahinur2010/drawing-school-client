import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} | Toys Hub`;
    }, [title])
};

export default useTitle;