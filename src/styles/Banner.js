import styled, { keyframes } from 'styled-components';

const getFadeContainerKeyFrame = ({ fadeIn }) => {
  return keyframes
  `
    from {background-color:rgba(29, 29, 31, ${fadeIn ? '0.9' : '0'});}
    to {background-color:rgba(29, 29, 31,  ${fadeIn ? '0' : '0.9'});}
  `;
};

export const Header = styled.div`
  animation-name: ${getFadeContainerKeyFrame};
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100%;
  z-index: 1;
  height: 55px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  width: 80%;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 16px;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const PageBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ isClicked }) => (isClicked ? 100 : 0)}%;
`;

export const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ isClicked }) => (isClicked ? 80 : 0)}%;
  transition: width 0.25s ease;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateX(${({ isClicked }) => (isClicked ? '-0%' : '-100%')});
  width: 75%;
  height: 100%;
  transition: all 0.25s ease;
`;

export const MobileLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3px;
`;

export const MobileLinkTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  padding-left: 22px;
  cursor: pointer;
`;