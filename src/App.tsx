import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
