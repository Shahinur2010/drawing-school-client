// import { useContext } from "react";
// import { AuthContext } from "../Providers/Authprovider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


// const useInstructor = () => {

//     const {user} = useContext(AuthContext);
//     // use axiosSecure with react query
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         enabled:!!user?.email && !!localStorage.getItem("access-token"),
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             return res.data.instructor;
//         }
//     })
//     return [isInstructor, isInstructorLoading]
// };

// export default useInstructor;