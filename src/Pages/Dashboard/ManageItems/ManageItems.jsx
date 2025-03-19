import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
  const [menu,refetch]=useMenu();
  const axiosSecure=useAxiosSecure();
  
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res=await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data)
        if(res.data.deletedCount > 0){
          // refetch and update ui
          refetch();
          Swal.fire({
          title: "Deleted!",
          text: `${item.name} has been deleted.` ,
          icon: "success"
        });

        }
        
      }
    });
    
        }
   
  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subHeading={"---Hurry Up!---"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$:{item.price}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-ghost text-xl bg-[#D1A054]">
                      <FaEdit></FaEdit>
                    </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        handleDeleteItem(item);
                      }}
                      className="btn btn-ghost text-xl bg-[#B91C1C]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
