
const AddedCard = ({ productCard, index, handleCardDelete }) => {
    const { id, title, price } = productCard;
    return (
        <div>
            <div className="">
               
                <div className="flex justify-between text-black border-2 border-blue-600 p-4 rounded-lg m-4 bg-white items-center">
                    <p>{index + 1 }</p>
                    <p>{title.slice(0,20)}</p>
                    <p>{price}</p>
                    <button onClick={()=>handleCardDelete(id)} className="bg-red-600 rounded-2xl p-2 text-white">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default AddedCard;