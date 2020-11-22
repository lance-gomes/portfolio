import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import MenuIcon from '@material-ui/icons/Menu';

import { 
  Header, 
  LinkContainer, 
  Section, 
  Link as LinkText,
  Hamburger,
  PageBlock,
  MenuContainer,
  SidebarWrapper,
  MobileLinkTitle,
  MobileLinkContainer
} from '../styles/Banner';

const Banner = () => {

  const [isScrolled, setIsScrolled] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const fadeIn = () => { 
    setIsScrolled(window?.pageYOffset < 60);
  }
  useEffect(() => {
    document.addEventListener('scroll', fadeIn);
  });

  return (
    <Header fadeIn={isScrolled}>
      <LinkContainer>
        <Section>
          <Hamburger>
            <MenuIcon style={{
              width: '28px', 
              height: '28px', 
              color: 'white', 
              cursor: 'pointer',
              display: isClicked ? 'none' : 'block'
              }}
              onClick={() => {setIsClicked(true)}}
            />
          </Hamburger>
          <PageBlock isClicked={isClicked} onClick={() => setIsClicked(false)}>
            <MenuContainer isClicked={isClicked}>
              <SidebarWrapper isClicked={isClicked}>
                <MobileLinkContainer>
                  <Link smooth="true" to="about" duration={1000}>
                    <MobileLinkTitle>About Me</MobileLinkTitle>
                  </Link>
                  <Link smooth="true" to="experience" duration={1000}>
                    <MobileLinkTitle>Work Experience</MobileLinkTitle>
                  </Link>
                  <Link smooth="true" to="contact" duration={1000}>
                    <MobileLinkTitle>Contact</MobileLinkTitle>
                  </Link>
                </MobileLinkContainer>
              </SidebarWrapper>
            </MenuContainer>
          </PageBlock>
        </Section>
        <Section>
          <LinkText>
            <Link smooth="true" to="about" duration={1000}>About Me</Link>
          </LinkText>
          <LinkText>
            <Link smooth="true" to="experience" duration={1000}>Work Experience</Link>
          </LinkText>
          <LinkText>
            <Link smooth="true" to="contact" duration={1000}>Contact</Link>
          </LinkText>
        </Section>
      </LinkContainer>
    </Header>
  )
}

export default Banner;
