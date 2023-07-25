import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Test() {
    const navigate = useNavigate();
    const nextPage=()=>{        
        navigate("/test2")
    }
  return (
    <div>
      <p>InCome Page.{localStorage.getItem("expense")}</p>
      <button onClick={nextPage}>Go to Expense Page</button>
    </div>
  )
}
