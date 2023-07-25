import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Test() {
    const navigate = useNavigate();
    const nextPage=()=>{        
        navigate("/")
        localStorage.setItem("expense","50")
    }
  return (
    <div>
      <p>Expanse Page</p>
      <button onClick={nextPage}>Go to Income Page</button>
    </div>
  )
}
