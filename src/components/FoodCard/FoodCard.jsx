


const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    const handleAddToCart=(food)=>{
        console.log(food)
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