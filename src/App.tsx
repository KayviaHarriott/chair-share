import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/HomePage'
import { Updates } from './pages/Updates'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </>
  )
}

export default App
