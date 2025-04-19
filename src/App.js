import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>#vanlife</Link>
        <nav>
          <Link to='/about'>about</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
