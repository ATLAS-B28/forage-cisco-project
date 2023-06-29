import React from 'react'
import './Card.css'
const Card = (props)=>{
   return (
    <div className='card-container'>
     <h2 className='card-head'>
        {props.name}
     </h2>
     <div className='card-text'>{props.children}</div>
    </div>
   )
}
export default Card