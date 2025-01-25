import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white w-full my-12">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>

            <div className="flex justify-center items-center px-16 py-32">
                <div>
                    <img className="w-[400px] " src={featuredImg} alt="" />
                </div>
                <div className="ml-8 w-1/3">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-2">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;