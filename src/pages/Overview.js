import React from 'react'
import { Link } from 'react-router-dom'
const Overview = () => {
  return (
    <div className='overview' >
     
     
<h1 className="branches">
Branches
</h1>

     
    <ul className='branch' >
      <li className='chemical' >
      <li>
    <h4> <Link to='/overview/chemical'  classname='site' >Chemical</Link></h4>
  </li>
       
      </li>
      <li>
    
    <Link to='/overview/computerscience'  classname='site' >Computer-Science</Link>
  </li>
  <li>
    
    <Link to='/electonic&telecommunication'  classname='site' >Electronics x Telecomunication</Link>
  </li>
  <li>
    
    <Link to='/instrumentation'  classname='site' >Instrumentation</Link>
  </li>
  <li>
    
    <Link to='/informationtechnology'  classname='site' >Information-Technology</Link>
  </li>
  <li>
    
    <Link to='/mechanical'  classname='site' >Mechanical</Link>
  </li>
    </ul>
    </div>
  )
}

export default Overview