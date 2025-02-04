import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    const location=useLocation();
    const noHeaderAndFooter=location.pathname.includes('login')
    return (
        <div>
            {noHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        {noHeaderAndFooter || <Footer></Footer>}
           
        </div>
    );
};

export default Main;