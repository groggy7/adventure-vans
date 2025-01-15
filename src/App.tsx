import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"
import VanDetail from './pages/VanDetail'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import HostVans from './pages/Host/HostVans'
import Reviews from './pages/Host/Reviews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/host'  element={<h1>host page goes here</h1>} />
          <Route path='/about' element={<About />} />
          <Route path='/vans'  element={<Vans />} />
          <Route path='/van/:id' element={<VanDetail />} />
          <Route path='/profile' element={<h1>profile page goes here</h1>} />
          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/vans' element={<HostVans />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
