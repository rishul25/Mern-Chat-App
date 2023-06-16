import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Singin from './pages/Singin'
import AvatarSet from './pages/AvatarSet'



const App = () => {
  return (
    <Router>
      <Routes>
          
          <Route path='/register' element={<Register/>}  />
          <Route path='/login' element={<Singin/>}  />
          <Route path='/setAvatar' element={<AvatarSet />}  />
          <Route path='/' element={<Chat/>}  />
     

      </Routes>
    
    </Router>
  )
}

export default App