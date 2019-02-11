import React from 'react'

const Inner =(props) =>{
    return (
    props.Innerlist.map((inner, i) =>
      {return(
         <li key={i}>
          <a href="#">
          <svg xmlns={inner.link} width={inner.width} height={inner.height} viewBox={inner.viewBox}>
          <path d={inner.d}></path>
           
            </svg>
          
            </a>
        </li>
    )}
    )
    )}

export default Inner;
