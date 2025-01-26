import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCoverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Nourish | Menu</title>
       
      </Helmet>
      <Cover img={menuCoverImg} title={'OUR MENU'} details={'Would you like to try a dish?'}></Cover>
      <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;