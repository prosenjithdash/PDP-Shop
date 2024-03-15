import AddedCard from "../AddedCard/AddedCard";

const AddedCards = ({ addCardProducts }) => {

    return (
        <div className="w-1/3 ">
            <h2 className="text-2xl text-blue-600 font-bold mb-10">Added Cards : {addCardProducts.length}</h2>

            <div className="bg-slate-100 rounded-lg h-full pt-4">

                <div className="flex justify-between p-4 rounded-xl mx-4 text-center border-b-4 border-blue-800 ">
                    <p className="text-xl font-semibold">Product Name </p>
                    <p className="text-xl font-semibold">Price  </p>
                </div>


                {
                    addCardProducts.map(productCard => <AddedCard key={productCard.id} productCard={productCard}></AddedCard>)
                }
            </div>
        </div>
    );
};

export default AddedCards;