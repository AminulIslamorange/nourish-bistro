

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto my-8 md:w-4/12 text-center">
            <p className=" text-[#D99904] mb-2">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 mx-auto py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;