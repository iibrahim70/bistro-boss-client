import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiousSecure';
import useAuth from './useAuth';

const UseCart = () => {
  const {user, loading} = useAuth();  
  const [axiosSecure] = useAxiosSecure(); 

  const { refetch, data: cart= [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,

    // queryFn: async () => {
    //   const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`, { headers: {
    //     authorization: `bearer ${token}`
    //   }})
    //   return res.json(); 
    // },

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      return res.data; 
    },
  })

  return [cart, refetch]; 
};

export default UseCart;