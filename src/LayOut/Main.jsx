import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    const location=useLocation();
    const noHeaderAndFooter=location.pathname.includes('login')||location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        {noHeaderAndFooter || <Footer></Footer>}
           
        </div>
    );
};

export default Main;