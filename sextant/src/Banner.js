import React from 'react'
import './Banner.css';
const Banner = (props)=>{
   return (
    <div className='banner-container'>
     <h2 className='banner-head'>
        {props.head}
     </h2>
     <div className='banner-text'>{props.children}</div>
    </div>
   )
}
export default Banner