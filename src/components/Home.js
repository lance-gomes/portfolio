import React from 'react';

import Banner from './Banner';
import Splash from './Splash';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Banner/>
      <Splash/>
      <About/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default Home;