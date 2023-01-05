import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FAQ = () => {
     const navigate = useNavigate()
  return (
    <div> 
    <h1>FAQ元件</h1>
    <Link to="/123">Home</Link>
    <input type="button" value="回首頁" onClick={(e)=>{navigate("/123")}} />
    </div>
  )
}

export default FAQ