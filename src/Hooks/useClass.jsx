import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    // eslint-disable-next-line no-empty-pattern
    const { data: slClass = [], refetch } = useQuery({
        queryKey: ['slClass'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/selectedclass');
            return res.json();
        }
    });

    return [ slClass, refetch]
}
    
export default useClass;



    