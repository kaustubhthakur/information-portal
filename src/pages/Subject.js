import React from 'react'
import { Link } from 'react-router-dom'

const Subject = () => {
  return (
    <div className="subjects">
        <p>Subjects</p>
        <ul>
          <li>
            <Link to='/subject/mathematics' >Mathematics</Link>
          </li>
        </ul>

    </div>
  
   
  )
}

export default Subject