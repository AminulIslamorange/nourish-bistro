import { FaBook, FaHome, FaPaypal, FaShopify, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { MdFormatListBulletedAdd, MdOutlineContactPhone,  } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { PiUsersFourFill } from "react-icons/pi";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // Todo get admin from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">

            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 gap-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'> <FaUtensils />Add items</NavLink></li>
                            <li> <NavLink to='/dashboard/manageItems'> <MdFormatListBulletedAdd />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/manegeBookings'><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><PiUsersFourFill />All Users</NavLink></li>


                        </> : <>
                            <li>
                                <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaPaypal /> Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><GoCodeReview /> Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking'><TbBrandBooking />My Booking</NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* common navlink for admin and user */}
                    <li>
                        <NavLink to='/'><FaHome />  Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> <IoMenu />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaShopify />  Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><MdOutlineContactPhone /> Contact</NavLink>
                    </li>
                </ul>

            </div>
            {/* Dasboard layout */}
            <div className="flex-1">
                <Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;