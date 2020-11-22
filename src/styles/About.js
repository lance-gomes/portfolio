import styled, { keyframes } from 'styled-components';

import Lance from '../assets/Lance.png';

const getSlideContainerKeyFrame = ({ shouldFade }) => {
  if (!shouldFade) {
    return
  }
  return keyframes
  `
    from {
      transform: translateY(10%);
    }
    to {
      transform: translateY(0%);
    }
  `;
};

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #fbfbfd;
  padding-top: 60px;
  @media (max-width: 600px) {
    padding-top: 30px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px 20px 0 20px;
  max-width: 85%;
  animation-name: ${getSlideContainerKeyFrame};
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  color: #1d1d1f;
  letter-spacing: -.002em;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.47059;
  letter-spacing: -.022em;
  color: #1d1d1f;
  margin: 12px 0;
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 6px 0;
  }
`;

export const LanceWrapper = styled.div`
  max-width: 250px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
`;

export const LanceImg = styled.img.attrs(() => ({
  src: Lance,
}))`
  height: 100%;
  width: 100%;
`;


