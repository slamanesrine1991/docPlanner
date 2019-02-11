import React from 'react'
import Slider from './Slider'





const sliders = [
    {
        src: 'https://www.docplanner.com/images/warsaw.png',
        title: 'Warsaw',
    },
    {
        src: 'https://www.docplanner.com/images/barcelona.png',
        title: 'Barcelona',
    },
    {
        src: 'https://www.docplanner.com/images/istanbul.png',
        title: 'Istanbul',
    },
    {
        src: 'https://www.docplanner.com/images/rome.png',
        title: 'Rome',
    },
    {
        src: 'https://www.docplanner.com/images/mexico-city.png',
        title: 'Mexico city',
    },
    {
        src: 'https://www.docplanner.com/images/barcelona.png',
        title: 'Curitiba',

    }
  ]


const Office =()=>{
    return( 
    <section className="office-section">
            
            <h2>Improve the lives of millions.Change yours forever</h2>
    <p>More than 500 team mates share our same vision, goals and passion. With offices in
         Warsaw, Barcelona, Istanbul, Rome, Czech
         Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
            <div className="office-cities">
                <Slider Sliderlist={sliders}/>
            </div>
        </section>
    );
}




  
export default Office;