import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import GeneratorPage from './pages/GeneratorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </Router>
  )
}

export default App
