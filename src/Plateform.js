import React from 'react'
import State from './State'
import flag from './flag.png'
import visits from './visits.png'
import patients from './patients.png'
import doctors from './doctors.png'

const states = [
    {
        src: flag,
        h5: 'Leader in 10 countries',
        p:'booked last month',
  
    },
   { src: visits,
    h5: '1 million appointments',
    p:'booked last month',

},
{src: patients,
        h5: '30 million unique patients',
        p:'visit us every month',
  
    },
    {src: doctors,
        h5: '2 million active doctors',
        p:'trust in our solutions',
  
    }
   
  ]


const Plateform =()=>{
    return( 
    <section className="platform">
         <div class="stats-header"> <h2>The world's <br/>
    biggest healthcare platform</h2>
    <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
    </div>
    <div class="stats-element">
<ul>
    
    <State Statelist={states}/>
            </ul>
            </div>
        </section>
    );
}

  
export default Plateform;
