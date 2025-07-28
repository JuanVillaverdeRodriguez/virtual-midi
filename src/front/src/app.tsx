import './App.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </HashRouter>
  )
}



export default App