import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

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
                    products.map(product => <Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;