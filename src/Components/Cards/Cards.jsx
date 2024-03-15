import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'; // ES6

const Cards = ({ handleAddedCardProducts }) => {

    // useState for hold data
    const [products, setProducts] = useState([]);

    // load all products data with useEffect
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    

    return (
        <div className="w-2/3">
            <h2 className="text-2xl text-blue-600 font-bold">Total Products : {products.length}</h2>

            <div>
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                        handleAddedCardProducts={handleAddedCardProducts}
                    ></Card>)
                }
            </div>
        </div>
    );
};


Cards.propTypes = {
    // handleMark: PropTypes.func,

    // handleMarkAsReading: PropTypes.func
}
export default Cards;