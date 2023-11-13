
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-5">
            <p className="text-orange-400 md:font-semibold mb-3">---{subHeading}---</p>
            <h1 className=" text-2xl md:text-4xl font-bold border-y-4 px-6 uppercase inline">{heading}</h1>
        </div>
    );
};

export default SectionTitle;