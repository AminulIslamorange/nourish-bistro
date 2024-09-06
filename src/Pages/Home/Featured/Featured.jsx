import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';

import './featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-4 my-8">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pb-20 pt-12 space-x-6">
                <div>
                    <img className="w-[648px] sm:w-full" src={featuredImg} alt="" />
                </div>
                <div className="2/12">
                    <p>March 20, 2025</p>
                    <h3>
                        WHERE CAN I GET SOME?
                    </h3>
                    <p> amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-b-white text-white">Read More</button>
                </div>
            </div>


        </div>
    );
};

export default Featured;