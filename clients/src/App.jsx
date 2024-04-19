import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import TransitionPage from './components/transitionPage/transitionPage'
import Header from './components/header/header'
import Banner from './components/banner/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<>
            <TransitionPage />
            <Header />
            <Banner/>
            <div className='w-screen h-screen '></div>
          </>}
          />
          
        
      </Routes>
    </>
  )
}

export default App
