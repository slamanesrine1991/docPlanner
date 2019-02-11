import React from 'react'

const Slider =(props) =>{
    return (
    props.Sliderlist.map((slide, i) =>
      {return(
         <div key={i} class="office">
          <a href="#">
            <img src={slide.src} alt={slide.title}/>
            <div class="office-desc">
            <span> {slide.title}</span>
             <button>SEE OPENINGS</button>
              </div>
            </a>
        </div>
    )}
    )
    )}

export default Slider;
