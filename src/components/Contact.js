import React, { useState, useEffect } from 'react';

import { FadeContainer } from '../styles/FadeContainer';

import { 
  ContactWrapper, 
  ContactContainer, 
  SectionTitle, 
  ContactDescription 
} from '../styles/Contact';

import SocialMedia from './SocialMedia';

const Contact = () => {
  const [shouldFade, setShouldFade] = useState(false);

  const fadeBreakpoints = [
    {
      scroll: 2661,
      getter: shouldFade,
      func: setShouldFade
    }
  ]
  
  const fadeInContact = () => { 
    let pageYOffset = window?.pageYOffset;

    fadeBreakpoints.map((breakpoint) => {
      if (pageYOffset > breakpoint.scroll && !breakpoint.getter) {
        breakpoint.func(true)
      }
    })
  }

  useEffect(() => {
    fadeInContact();
    document.addEventListener('scroll', fadeInContact);
  });

  return (
    <ContactWrapper id="contact">
      <FadeContainer shouldFade={shouldFade}>
      <ContactContainer shouldFade={shouldFade}>
        <SectionTitle>
          Contact Info
        </SectionTitle>
        <ContactDescription>
          Feel free to reach out! I'm currently seeking internship opportunities for Summer 2021
        </ContactDescription>
        <SocialMedia/>
      </ContactContainer>
      </FadeContainer>
    </ContactWrapper>
  )
}

export default Contact;