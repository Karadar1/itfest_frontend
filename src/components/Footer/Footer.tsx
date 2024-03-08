/* eslint-disable prettier/prettier */

import React from 'react';
import {
  FooterContainer,
  FooterLegal,
  FooterLinks,
  FooterLinksColon,
  FooterSocials,
  SocialsRow,
} from './Footer.styles';
import BlackLogo from 'src/assets/svg/BlackLogo';
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router';

// import instagram from '../../assets/icons/instagram.png'
export default function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterSocials>
        <BlackLogo />
        <SocialsRow>
          <SocialIcon bgColor="black" url="www.instagram.com" />
          <SocialIcon bgColor="black" url="www.facebook.com" />
          <SocialIcon bgColor="black" url="www.linkedin.com" />
        </SocialsRow>
      </FooterSocials>

      <FooterLinks>
        <FooterLinksColon>
          <h2>Despre SecondCycle</h2>
          <div>Contact</div>
          <div>Despre Noi</div>
          <div>Intrebari Frecvente</div>
        </FooterLinksColon>
        <FooterLinksColon>
          <h2>Linkuri utile</h2>
          <div>Termeni si Conditii</div>
          <div>Acord GDPR</div>
          <div>Prelucrare Cookies</div>
          <div>ANPC</div>
        </FooterLinksColon>
      </FooterLinks>
      <FooterLegal></FooterLegal>
    </FooterContainer>
  );
}
