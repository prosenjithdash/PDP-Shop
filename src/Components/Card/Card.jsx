//rsc
import PropTypes from 'prop-types'; // ES6

const Card = ({ product, handleAddedCardProducts }) => {

    // disstureing data
    const { id, title, price, description, category, image } = product;
    return (
        <div className=" border-2 rounded-lg border-blue-600 p-4 my-10 shadow-xl">
            <div className=" w-full flex justify-center text-center my-4">
                <img className="w-[300] h-[500px] " src={image} alt="" />
            </div>
            <h2 className="text-2xl font-bold my-2 text-blue-700">{title}</h2>
            <p className="text-gray-500 mb-2">{description}</p>
            <div className=" my-4 flex items-center justify-between">
                <p className=" text-2xl font-semibold">{category}</p>
                <button onClick={() => handleAddedCardProducts(product)} className='py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl '>Add Cart</button>
                <p className="font-bold text-2xl">{price} Price</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,

}
export default Card;