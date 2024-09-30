import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlight from './Components/Highlight';
import Model from './Components/Model';
import * as Sentry from '@sentry/react';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App;
