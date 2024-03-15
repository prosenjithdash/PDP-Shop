//rsc
const Card = ({ product }) => {

    // disstureing data
    const { id, title, price, description, category, image } = product;
    return (
        <div className=" border-2 rounded-lg border-blue-600 p-4 my-10 shadow-xl">
            <div className=" w-full flex justify-center text-center">
                <img className="w-[400] h-[600px] " src={image} alt="" />
            </div>
            <h2 className="text-2xl font-bold my-2">{title}</h2>
            <p className="text-gray-500 mb-2">{description}</p>
            <div className="flex items-center justify-between">
                <p className="text-blue-600 text-2xl font-semibold">{category}</p>
                <p className="font-bold text-2xl">{price} Price</p>
            </div>
        </div>
    );
};

export default Card;