import React from 'react'

const State =(props) =>{
    return (
    props.Statelist.map((state, i) =>
      {return(
         <li key={i}>
          <img src={state.src}/>
          <h5>{state.h5}</h5>
<p>{state.p}</p>

    </li>
         
    )}
    )
    )}

export default State;
