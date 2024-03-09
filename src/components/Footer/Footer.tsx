/* eslint-disable prettier/prettier */

import React from 'react';
import {
  FooterContainer,
  FooterLegal,
  FooterLinks,
  FooterLinksColumn,
  FooterSocials,
  SocialsRow,
  PaymentMethod,
  IconWrap,
  LinkItem,
  ColumnTitle,
} from './Footer.styles';
import BlackLogo from 'src/assets/svg/BlackLogo';
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router';
import VisaIcon from 'src/assets/svg/VisaIcon';
import MastercardIcon from 'src/assets/svg/MastercardIcon';

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
        <FooterLinksColumn>
          <ColumnTitle>Informatii</ColumnTitle>
          <LinkItem>Contact</LinkItem>
          <LinkItem>Despre Noi</LinkItem>
          <LinkItem>Intrebari Frecvente</LinkItem>
        </FooterLinksColumn>
        <FooterLinksColumn>
          <ColumnTitle>Linkuri utile</ColumnTitle>
          <LinkItem>Termeni si Conditii</LinkItem>
          <LinkItem>Acord GDPR</LinkItem>
          <LinkItem>Prelucrare Cookies</LinkItem>
          <LinkItem>ANPC</LinkItem>
        </FooterLinksColumn>
      </FooterLinks>
      <FooterLegal>
        <h2>Cumparaturi Sigure </h2>
        {/* <PaymentMethod>
          <VisaIcon />
          <MastercardIcon />
        </PaymentMethod> */}
        <img src="/icons/ANPC.png" style={{ width: '180px', height: '50px' }} />
      </FooterLegal>
    </FooterContainer>
  );
}
