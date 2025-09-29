import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoadingSplash from './pages/LoadingSplash'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoadingSplash />} />
      </Routes>
    </>
  )
}

export default App
