import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";





const FoodCard = ({ item }) => {
    const axiosSecure=useAxiosSecure();
    const { name, image, recipe, price,_id } = item;
    const navigate=useNavigate();
    const location=useLocation();
    const {user}=useAuth();
    const [,refetch]=useCart();
    const handleAddToCart=()=>{
       
        if(user && user?.email){
            // send data to database
            const cartItem={
                menuId:_id,
                email:user.email,name,image,price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Item added successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch the cart to update cart items
                    refetch();
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send user to Login page
                navigate('/login',{state:{from:location}})

                }
              });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="text-white bg-slate-900 px-2 mr-2 right-2 top-2 absolute">$: {price}</p>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="justify-start">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>{handleAddToCart(item)}}
                     className="btn btn-outline border-0 border-b-4  mt-2 text-center text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;