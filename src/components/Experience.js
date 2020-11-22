import React, { useState, useEffect } from 'react';

/* Styles */
import { ExperienceContainer, SectionTitle, ExperienceWrapper } from '../styles/Experience';
import { FadeContainer } from '../styles/FadeContainer';

/* Components */
import Timeline from './Timeline';

const Experience = () => {
  const [shouldFade, setShouldFade] = useState(false);

  const fadeBreakpoints = [
    {
      scroll: 950,
      getter: shouldFade,
      func: setShouldFade
    }
  ]
  
  const fadeInExperience = () => { 
    let pageYOffset = window?.pageYOffset;

    fadeBreakpoints.map((breakpoint) => {
      if (pageYOffset > breakpoint.scroll && !breakpoint.getter) {
        breakpoint.func(true)
      }
    })
  }
  useEffect(() => {
    fadeInExperience();
    document.addEventListener('scroll', fadeInExperience);
  });

  return (
    <ExperienceWrapper id="experience">
      <FadeContainer shouldFade={shouldFade}>
      <ExperienceContainer shouldFade={shouldFade}>
          <SectionTitle>
            Professional Experience
          </SectionTitle>
          <Timeline/>
      </ExperienceContainer>
      </FadeContainer>
    </ExperienceWrapper>
  )
}

export default Experience;