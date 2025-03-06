import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle heading={'ADD AN ITEM'} subHeading={"---What's new?---"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Recipe name*")} />
                    
                    <select {...register("category*")}
                     defaultValue="Pick a text editor" className="select select-primary">
                        <option disabled={true}>Select a Category</option>
                        <option value="Salad">Salad</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Soups">Soups</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;