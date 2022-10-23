import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Subject from './pages/Subject'
import Overview from './pages/Overview'
import Chemical from './branches/Chemical'
import ComputerScience from './branches/ComputerScience'

import Navbar from './components/Navbar'
import About from './pages/About'
import EigenValues from './components/c-pagesM/EigenValues'
import Matrix from './components/sub-pageM/Matrix'
import Mathematics from './sub-pages/Mathematics'
import Login from './pages/Login'
const App = () => {
  
  return (
    <BrowserRouter>
   <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='*' element={<Error/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/subject' element={<Subject/>} />
  <Route path='/overview' element={<Overview/>} />
  <Route path='/overview/chemical' element={<Chemical/>} />
  <Route path='/overview/computerscience' element={<ComputerScience/>} />
  <Route path='/overview/electronics&telecommunication' element={<Chemical/>} />
  <Route path='/instrumentation' element={<Chemical/>} />
  <Route path='/informationtechnology' element={<Chemical/>} />
  <Route path='/mechanical' element={<Chemical/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/subject/mathematics' element={<Mathematics/>} />
<Route path='/subject/mathematics/matrix' element={<Matrix/>}/>
<Route path='/subject/mathematics/matrix/eigenvalue' element={<EigenValues/>} />
</Routes>
</BrowserRouter>

  )
}

export default App