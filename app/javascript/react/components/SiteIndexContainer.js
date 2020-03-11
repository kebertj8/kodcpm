import React from "react"
import { Link } from 'react-router-dom'

const SiteIndexContainer = props => {
  return (
    <div className="head-line">   
      <h1>Construction Project Management</h1>
      <h3>The only tool you need to manage your Construction Project</h3>
      <div className="site-index-container">
        <div className="page-content">
        </div>
        <Link to ="/projects" className="button">Create New Project</Link><br>
        </br>
        <Link to ="/stages" className="button">Ongoing</Link>
      </div>
    </div>
  )
}

export default SiteIndexContainer 
