
const AddedCard = ({ productCard }) => {
    const { id, title, price } = productCard;
    return (
        <div>
            <div className="">
               
                <div className="flex justify-between text-black border-2 border-blue-600 p-4 rounded-lg m-4 bg-white">
                    <p>{title}</p>
                    <p>{price}</p>

                </div>
            </div>
        </div>
    );
};

export default AddedCard;