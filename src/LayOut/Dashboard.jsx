import { FaHome, FaPaypal, FaShopify, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart]=useCart();
    return (
        <div className="flex">

            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 gap-4">
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome/> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar/> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'><FaPaypal/> Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart/> My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><GoCodeReview /> Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'><TbBrandBooking />My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome/>  Home</NavLink>
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