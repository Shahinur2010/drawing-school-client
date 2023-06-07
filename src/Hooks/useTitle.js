import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} | Drawing School`;
    }, [title])
};

export default useTitle;