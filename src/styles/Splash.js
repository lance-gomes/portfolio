import styled from 'styled-components';

import Splash from '../assets/splash.jpg';

export const SplashContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SplashWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SplashImg = styled.img.attrs(() => ({
  src: Splash,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

export const SplashTextContainer = styled.div`
  position: absolute;
  padding: 0 10px 0 10px;
`;

export const SplashTextContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SplashTextH1 = styled.h1`
  color: white;
  font-size: 40px;
  margin: 5px 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SplashTextH2 = styled.h2`
  color: white;
  font-size: 30px;
  margin: 5px 0;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;