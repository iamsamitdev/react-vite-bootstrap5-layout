import {Route ,Routes} from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Counter from './pages/Counter'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  )
}

export default App