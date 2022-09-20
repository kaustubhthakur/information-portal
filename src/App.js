import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Subject from './pages/Subject'
import Overview from './pages/Overview'
import Navbar from './components/Navbar'
import About from './pages/About'
import EigenValues from './components/c-pagesM/EigenValues'
import Matrix from './components/sub-pageM/Matrix'
import Mathematics from './sub-pages/Mathematics'
import Login from './pages/Login'
const App = () => {
  const [user,setUser] = useState(null);
  return (
    <BrowserRouter>
   <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='*' element={<Error/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/subject' element={<Subject/>} />
  <Route path='/overview' element={<Overview/>} />
  <Route path='/login' element={<Login setUser={setUser} />} />
  <Route path='/subject/mathematics' element={<Mathematics/>} />
<Route path='/subject/mathematics/matrix' element={<Matrix/>}/>
<Route path='/subject/mathematics/matrix/eigenvalue' element={<EigenValues/>} />
</Routes>
</BrowserRouter>

  )
}

export default App