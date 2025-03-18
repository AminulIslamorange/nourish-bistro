import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";


const ManageItems = () => {
  const [menu] = useMenu();
  const handleDeleteItem=(item)=>{

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
                    <button className="btn btn-ghost text-xl bg-[#D1A054]">
                      <FaEdit></FaEdit>
                    </button>
                  </th>
                  <th>
                    <button onClick={()=>{handleDeleteItem(item)}} className="btn btn-ghost text-xl bg-[#B91C1C]">
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
