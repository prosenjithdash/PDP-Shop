
import './App.css'
import Card from './Components/Card/Card'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='main_container'>

      <Header></Header>

      <div className='flex gap-5 w-[90%] max-w-[1440px] mx-auto mt-10'>

        <Cards></Cards>
        {/* <Card></Card> */}

      </div>
    </div>
  )
}

export default App
