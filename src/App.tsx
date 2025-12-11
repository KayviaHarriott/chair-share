import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/HomePage'
import { Updates } from './pages/Updates'
import { NavBar } from './navigation/NavBar'
import { Footer } from './navigation/Footer'

function App() {

  return (
    <>
    <div className="sticky top-0 z-50">
      <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
