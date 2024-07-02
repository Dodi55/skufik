import {Routes, Route, Link} from 'react-router-dom'
import { About } from '../spaSrc/About'
import { Blog } from '../spaSrc/Blog'
import { HomePage } from '../spaSrc/Homepage'
import { SendHome } from '../spaSrc/SendHome'
import './App.sass'

function App() {
  return (
    <> 
      <header>
        <Link to="/">Home1</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<SendHome />}/>
      </Routes>

      <button>5</button>
    </>
  )
}

export default App
