
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

    /////////////////////////////////////////////
    
    // apply condition have to  maximun time  or not one object
    const isExist = addCardProducts.find(item => item.id === product.id)
    // console.log(isExist)
    if (!isExist) {

      const newAddedCardProduct = [...addCardProducts, product];
      setAddCardProducts(newAddedCardProduct);

    }
    else {
      alert('Already Exisit.')
    }
  }


  /////////////////////////////////////////////////////////////

  // Delete AddedCard
  const handleCardDelete = (id) => {
    console.log('Deleted card', id)
    const afterDeleteNewCard = addCardProducts.filter(deleteCard => deleteCard.id !== id)
    console.log(afterDeleteNewCard)
    setAddCardProducts(afterDeleteNewCard)
  }


  return (
    <div className='main_container'>

      <Header></Header>

      <div className='flex gap-5 w-[90%] max-w-[1440px] mx-auto mt-10'>

        <Cards handleAddedCardProducts={handleAddedCardProducts}></Cards>
        <AddedCards addCardProducts={addCardProducts} handleCardDelete={handleCardDelete}></AddedCards>

      </div>
    </div>
  )
}

export default App
