import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;

    }
  })

  const handleDeleteUser=user=>{
    Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    axiosSecure.delete(`/users/${user._id}`)
    
                        .then(res => {
                            if(res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
    
                            }
                        })
                }
            });


  }
  const handleMakeAdmin=user=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        refetch();
        Swal.fire({
          title: `${user.name} admin Now`,
          icon: "success",
          draggable: true
        });

      }
    })
  }
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
              {users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { user.role==='admin'? "Admin" : <button onClick={()=>{handleMakeAdmin(user)}}
              className="btn btn-ghost text-xl bg-[#D1A054]">
                <FaUsers/>
              </button>}</td>
                <td>
                  <button onClick={()=>{handleDeleteUser(user)}}
              className="btn btn-ghost text-xl bg-[#B91C1C]"><RiDeleteBin6Line /></button></td>
              </tr>)}



            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
};

export default AllUsers;