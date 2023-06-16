import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    // eslint-disable-next-line no-empty-pattern
    const { data: slClass = [], refetch } = useQuery({
        queryKey: ['slClass'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-five-murex.vercel.app/selectedclass');
            return res.json();
        }
    });

    return [slClass, refetch]
}

export default useClass;



