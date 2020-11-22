import React, { useEffect, useState } from 'react';

import { 
  AboutContainer, 
  AboutMeDescription, 
  SectionTitle, 
  AboutWrapper,
  LanceWrapper,
  LanceImg
} from '../styles/About';
import { FadeContainer } from '../styles/FadeContainer';

const About = () => {
  const [shouldFadeAbout, setShouldFadeAbout] = useState(false);
  const [shouldFadeAbout2, setShouldFadeAbout2] = useState(false);
  const [shouldFadeAbout3, setShouldFadeAbout3] = useState(false);
  const [shouldFadeAbout4, setShouldFadeAbout4] = useState(false);
  const [shouldFadeAbout5, setShouldFadeAbout5] = useState(false);
  const [shouldFadeAbout6, setShouldFadeAbout6] = useState(false);

  const fadeBreakpoints = [
    {
      scroll: 275,
      getter: shouldFadeAbout,
      func: setShouldFadeAbout
    },
    {
      scroll: 350,
      getter: shouldFadeAbout2,
      func: setShouldFadeAbout2
    },
    {
      scroll: 400,
      getter: shouldFadeAbout3,
      func: setShouldFadeAbout3
    },
    {
      scroll: 450,
      getter: shouldFadeAbout4,
      func: setShouldFadeAbout4
    },
    {
      scroll: 500,
      getter: shouldFadeAbout5,
      func: setShouldFadeAbout5
    },
    {
      scroll: 550,
      getter: shouldFadeAbout6,
      func: setShouldFadeAbout6
    }
  ]
  
  const fadeInAbout = () => { 
    let pageYOffset = window?.pageYOffset;

    fadeBreakpoints.map((breakpoint) => {
      if (pageYOffset > breakpoint.scroll && !breakpoint.getter) {
        breakpoint.func(true)
      }
    })
  }
  useEffect(() => {
    fadeInAbout();
    document.addEventListener('scroll', fadeInAbout);
  });

  return (
    <AboutWrapper id="about">
      <AboutContainer shouldFade={shouldFadeAbout}>
        <FadeContainer shouldFade={shouldFadeAbout}>
          <SectionTitle>
            About Me
          </SectionTitle>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout2}>
          <AboutMeDescription>
            Hello! 😊 My name is Lance Gomes and I am an Engineering student at the University of Waterloo
          </AboutMeDescription>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout3}>
          <AboutMeDescription>
            I'm extremely passionate about <strong>software development</strong>, <strong>web development</strong>, and more recently <strong>artificial intelligence 🤖</strong>
          </AboutMeDescription>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout4}>
          <AboutMeDescription>
            I have significant fullstack experience building rich and responsive web applications with ReactJS 👷🏽
          </AboutMeDescription>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout5}>
          <AboutMeDescription>
            I also have over four years of experience solving a wide variety of problems using Java, Python, and C
          </AboutMeDescription>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout6}>
          <AboutMeDescription>
            In my free time, I enjoy playing basketball, discovering new music, and catching up on sleep 🛌
          </AboutMeDescription>
        </FadeContainer>
        <FadeContainer shouldFade={shouldFadeAbout6}>
        <LanceWrapper>
          <LanceImg/>
        </LanceWrapper>
        </FadeContainer>
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About;