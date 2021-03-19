import React from "react"
import { Link } from 'react-router-dom'

const CpmTile = props => {
  return (
      <div className="head-line"> 
        <div className="site-index-container">
          <div className="page-content"></div>
        <h1>Project Title</h1>
        <h2>Link that Lists to other projects</h2>
        <Link to ="/basicMaterials" className="button">Basic Material List</Link><br/>
        <Link to ="/specialMaterials" className="button">Special Material List</Link><br/>
        <Link to ="/stages" className="button">Schedule</Link><br/>
        <Link to ="/cpm" className="button">Time-Alloted</Link><br/>
        <Link to ="/profits" className="button">Profit First</Link><br/>
        <Link to ="/expenses" className="button">Business Expenses</Link><br/>
        <Link to ="/contractors" className="button">Contractors</Link><br/>
        <Link to ="/changeOrder" className="button">Change Orders</Link><br/>
        <Link to ="/projects" className="button">Add New Project</Link><br/>
        </div>
      </div>
  )
  }

export default CpmTile
