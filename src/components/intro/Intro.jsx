import React from 'react'
import './intro.css';
import Girl from '../../images/girl.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
               <h2 className='i-intro'>Hello, my name is </h2>
               <h1 className='i-name'>Nada Eid </h1> 
               <div className='i-title' >
                   <div className='i-title-wrapper'>
                       <div className='i-title-item'> UI & UX developer</div>
                       <div className='i-title-item'> GRAPHIC DESIGNER</div>
                       <div className='i-title-item'> WordPress Developer</div>
                   </div>
               </div>
                  
                  <p className='i-desc'>
                      I develop for all devices........

                  </p>
            </div>
            
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src= {Girl} alt="" className='i-img' />
        </div>

    </div>
  )
}

export default Intro