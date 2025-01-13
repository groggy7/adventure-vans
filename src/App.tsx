import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/host'  element={<h1>host page goes here</h1>} />
          <Route path='/about' element={<About />} />
          <Route path='/vans'  element={<Vans />} />
          <Route path='/profile' element={<h1>profile page goes here</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
