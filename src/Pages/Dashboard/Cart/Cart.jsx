import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div>
                <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'---My Cart---'}></SectionTitle>
            </div>
            <div className="bg-[#FFF]">
                <div className="flex text-3xl justify-evenly mt-4">
                    <h2 className="ml-2">Total orders: {cart.length}</h2>
                    <p>total price: ${totalPrice}</p>
                    <button className="bg-[#D1A054] px-3">Pay</button>
                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table ">
                        {/* head */}
                        <thead className=" mx-2">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>$:{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost text-xl bg-[#B91C1C]"><RiDeleteBin6Line /></button>
                                </th>
                            </tr>)}





                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;