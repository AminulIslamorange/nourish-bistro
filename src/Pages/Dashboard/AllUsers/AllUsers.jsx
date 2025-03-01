import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/users');
            return res.data;

        }
    })
    return (
        <div>
            <div> 
                <SectionTitle heading={'MANAGE ALL USERS'} subHeading={"---How many??---"}></SectionTitle>
            </div>
            <div className="bg-[#FFF]  m-12">
                <h2>Total Users:{users.length}</h2>

                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
     {users.map(user=><tr key={user._id}>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)}
      
     
     
    </tbody>
  </table>
</div>
        

            </div>
        </div>
    );
};

export default AllUsers;