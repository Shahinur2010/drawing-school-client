// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/Authprovider";

// const useAdmin = () =>{
//     const {user} = useContext(AuthContext);
//     // use axiosSecure with react query
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled:!!user?.email && !!localStorage.getItem("access-token"),
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }

// export default useAdmin;