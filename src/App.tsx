
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Recipe from './components/Recipe'
function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recipe/:id' element={<Recipe/>}/>
        </Routes>
      </main>
    </div>
    
    </BrowserRouter>
  )
}

export default App
