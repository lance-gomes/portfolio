import React from 'react';

import { 
  SplashImg, 
  SplashWrapper, 
  SplashContainer,
  SplashTextContainerWrapper,
  SplashTextContainer,
  SplashTextH1,
  SplashTextH2,
} from '../styles/Splash';

const Splash = () => {
  return (
    <SplashContainer>
      <SplashWrapper>
        <SplashImg/>
        <SplashTextContainerWrapper>
          <SplashTextContainer>
            <SplashTextH1>LANCE GOMES</SplashTextH1>
            <SplashTextH2>University of Waterloo | Engineering 2021</SplashTextH2>
          </SplashTextContainer>
        </SplashTextContainerWrapper>
      </SplashWrapper>
    </SplashContainer>
  );
}

export default Splash;