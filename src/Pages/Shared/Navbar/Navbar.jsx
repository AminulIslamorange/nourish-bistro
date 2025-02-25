import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
  const [cart]=useCart();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const navOption = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order</Link></li>
    <li><Link to='/dashboard/cart'>
      <button className="btn">
      <FaCartShopping />
        <div className="badge badge-secondary">+{cart.length}</div>
      </button></Link></li>

    {
      user ? <>
        <span className="text-xl text-white">{user?.displayName}</span>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> :
        <><li><Link to='login'>Login</Link></li> </>
    }
  </>
  return (
    <div>
      <div className="navbar fixed z-30 bg-opacity-30 bg-black text-white mx-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOption}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NOURISH BISTRO<br />RESTAURANT</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;