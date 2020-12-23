import React from "react"
import { Link } from 'react-router-dom'

const SiteIndexContainer = props => {
  return (
    <div className="head-line">   
      <h1>Build Out</h1>
          <div className="site-index-container">
            <div className="page-content">
              </div>
                <Link to ="/mainCpm" className="button">Job Sites </Link><br/>
        </div>
    </div>
  )
}

export default SiteIndexContainer 
