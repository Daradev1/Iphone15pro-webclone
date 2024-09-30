import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils';
const Hero = () => {
const [videoSrc, SetVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

const HandleVidoeSrcSet = () =>{
  if(window.innerWidth <760){
    SetVideoSrc(smallHeroVideo)
  }
  else{
    SetVideoSrc(heroVideo)
  }
}

useEffect(()=>{
  window.addEventListener('resize', HandleVidoeSrcSet);
  return ()=>{
    window.removeEventListener("resize", HandleVidoeSrcSet)
  }
},[])

useGSAP(()=>{
   gsap.to('#hero', {
    opacity:1,
    delay: 2})
    gsap.to('#cta', {
     opacity:1,
     y: -40, 
     delay:2
    })
},[])


  return (
    <section className='w-full nav-height bg-black position-relative'>
<div className="h-5/6 w-full flex-center flex-col">

<p id='hero' className='hero-title'>iPhone 15 pro</p>

<div className="md:w-10/12 w-9/12">
 <video className='pointer-events-none' autoPlay muted playsInline={true} key={
  videoSrc
 }>
 <source type='video/mp4' src={videoSrc}/>

 </video>
</div>
</div>

<div id='cta' className="flex flex-col items-center opacity-0 trasnslate-y-20">

  <a href="#highlights" className='btn'>Buy</a>
  <p className="font-normal text-xl">from $199/month or $999</p>
</div>

    </section>
  )
}

export default Hero