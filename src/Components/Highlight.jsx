import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { watchImg } from '../utils';
import VidoeCarosel from './VidoeCarosel';
const Highlight = () => {

  useGSAP(()=>{
    gsap.to('#title', {
      opacity:1, y:0
    })
    gsap.to('.link', {opacity:1, y:0, duration:1, stagger:0.25})
  },[])

  return (
   <section id="highlights" className='w-screen overflow-hidden common-padding bg-zinc'>
     <div className="screen-max-width">
      <div className='mb-12 md:flex w-full item-end justify-between'>
        <h1 id="title" className="section-heading">
          Get the highlights.
        </h1>
        <div className="flex flex-wrap items-end gap-5">
          <p className='link'>watch the film
            <img src={watchImg} alt="watch" className='ml-2' />
          </p>
          <p className='link'>watch the event
            <img src={watchImg} alt="watch" className='ml-2' />
          </p>
        </div>
      </div>
      <VidoeCarosel/>
     </div>

   </section>
  )
}

export default Highlight