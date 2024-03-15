
import { useState } from 'react'
import './App.css'
import AddedCards from './Components/AddedCards/AddedCards'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'

function App() {

  // hold added products card data with useState
  const [addCardProducts, setAddCardProducts] = useState([]);

  // handle added products card data with eventHandler
  const handleAddedCardProducts = (product) => {
    // console.log('Added Card Product.', product)
    const newAddedCardProduct = [...addCardProducts, product];
    setAddCardProducts(newAddedCardProduct);
  }

  return (
    <div className='main_container'>

      <Header></Header>

      <div className='flex gap-5 w-[90%] max-w-[1440px] mx-auto mt-10'>

        <Cards handleAddedCardProducts={handleAddedCardProducts}></Cards>
        <AddedCards addCardProducts={addCardProducts}></AddedCards>

      </div>
    </div>
  )
}

export default App
