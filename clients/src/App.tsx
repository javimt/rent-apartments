import { Route, Routes } from 'react-router-dom'
import './global.css'
import NavBar from './components/nav-bar/navbar'
import Header from './components/header/header'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
    </>
  )
}

export default App
