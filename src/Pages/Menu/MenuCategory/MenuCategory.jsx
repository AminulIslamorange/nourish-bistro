import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,details,img}) => {
    return (
        <div className="p-12 text-center">
            { title && <Cover img={img} title={title} details={details}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
            {
            items.map(item=><MenuItem 
                key={item._id}
                 item={item}
                ></MenuItem>)
            }


        </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4  mt-2 text-center">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
     
        </div>
    );
};

export default MenuCategory;