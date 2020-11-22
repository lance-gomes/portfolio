import styled, { keyframes } from 'styled-components';

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

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #fbfbfd;
  padding: 60px 0 60px 0;
  @media (max-width: 600px) {
    padding: 0 0 30px 0;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  max-width: 85%;
  animation-name: ${getSlideContainerKeyFrame};
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  color: #1d1d1f;
  letter-spacing: -.002em;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const ContactDescription = styled.p`
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