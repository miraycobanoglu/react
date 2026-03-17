import './tailwind.css'
import Product from './pages/product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/update/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App  
