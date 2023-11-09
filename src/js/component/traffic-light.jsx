import React, { useState } from 'react'

export default function TrafficLight() {
 
  const [color, setColor] = useState("red");

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='bg-dark' style={{width: "16px", height: "80px"}}></div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-dark rounded py-4" style={{width: "160px"}}>
            <div className={`bg-danger rounded-circle my-3 ${color === "red" ? "selected" : ""}`} style={{width: "90px", height: "90px"}} id="red" onClick={() => setColor("red")}></div>
            <div className={`bg-warning rounded-circle my-3 ${color === "yellow" ? "selected" : ""}`} style={{width: "90px", height: "90px"}} id="yellow" onClick={() => setColor("yellow")}></div>
            <div className={`bg-success rounded-circle my-3 ${color === "green" ? "selected" : ""}`} style={{width: "90px", height: "90px"}}  id="green" onClick={() => setColor("green")}></div>
        </div>
    </div>
  )
}