import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

import { SocialMediaContainer, Link, ButtonContainer } from '../styles/SocialMedia';


const SocialMedia = () => {
  return (
    <SocialMediaContainer>
        <ButtonContainer>
          <Link href="https://www.linkedin.com/in/lance-gomes-659766177/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon color="primary" style={{width: '80px', height: '80px'}}/>
          </Link>
          <Link href="https://github.com/lance-gomes/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{color: 'black', width: '70px', height: '70px', padding: '0 5px 0px 5px'}}/>
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          <Link href="mailto:lvgomes@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <EmailIcon style={{width: '80px', height: '80px'}}/>
          </Link>
          <Link href="./resume.pdf" target="_blank" rel="noopener noreferrer">
            <DescriptionIcon style={{width: '80px', height: '80px', color: 'grey'}}/>
          </Link>
        </ButtonContainer>
    </SocialMediaContainer>
  )
}

export default SocialMedia;