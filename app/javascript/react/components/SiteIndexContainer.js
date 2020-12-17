import React from "react"
import { Link } from 'react-router-dom'

const SiteIndexContainer = props => {
  return (
    <div className="head-line">   
      <h1>Build Out</h1>
          <div className="site-index-container">
            <div className="page-content">
              </div>
        
                <Link to ="/projects" className="button">Job Site </Link><br/>
            
                <Link to ="/stages" className="button">Schedule</Link><br/>
                
                <Link to ="/cpm" className="button">Time-Table</Link><br/>
                
                <Link to ="/profits" className="button">Profits</Link>
        </div>
    </div>
  )
}

export default SiteIndexContainer 
