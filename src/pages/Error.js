import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
const Error = () => {
  return (
    <div>
      <p className='error'><h1>404</h1></p>
    <section className='section'>
     
        <h1>Page Not Found</h1>
  
    </section>
  <footer>  
    <div className='home' > 
      <h1> <Link to="/" >back home</Link>  </h1>
    </div>
    
  </footer>
    </div>

  )
}

export default Error
