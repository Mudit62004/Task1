import React from 'react'
import {Route, Routes} from 'react-router-dom' 
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Deals from './pages/Deals'
import Menu from './pages/Menu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/Deals' element={<Deals />}/>
           <Route path='/Menu' element={<Menu />}/>

      </Routes>
    </div>
  )
}

export default App