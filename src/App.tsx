import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/host'  element={<h1>host page goes here</h1>} />
          <Route path='/about' element={<h1>about page goes here</h1>} />
          <Route path='/vans'  element={<h1>vans page goes here</h1>} />
          <Route path='/profile' element={<h1>profile page goes here</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
