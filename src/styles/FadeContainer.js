import styled, { keyframes } from 'styled-components';

const getFadeContainerKeyFrame = ({ shouldFade }) => {
  if (!shouldFade) {
    return
  }
  return keyframes
  `
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
};

export const FadeContainer = styled.div`
  animation-name: ${getFadeContainerKeyFrame};
  animation-duration: 1700ms;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
`;