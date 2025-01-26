import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCoverImg from '../../../assets/menu/banner3.jpg'

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import desserImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
   
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Nourish | Menu</title>

            </Helmet>
           {/* main cover */}
           <Cover img={menuCoverImg} title={'OUR MENU'} details={'Would you like to try a dish?'}></Cover>
          <SectionTitle heading={"TODAY'S OFFER"} subHeading={'---Dont miss---'}></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
          <MenuCategory items={dessert} title={'DESSERTS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={desserImg}></MenuCategory>

          <MenuCategory items={pizza} title={'PIZZA'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={pizzaImg}></MenuCategory>


          <MenuCategory items={salad} title={'SALADS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={saladImg}></MenuCategory>


          <MenuCategory items={soup} title={'SOUPS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={soupImg}></MenuCategory>


        </div>
    );
};

export default Menu;