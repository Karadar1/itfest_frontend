import React from 'react';

import {
  ButtonsContainer,
  Header,
  HeroSection,
  HeroTitle,
  ParallaxContainer,
} from './HomePage.styled';
// @ts-ignore
import { Link } from 'react-router-dom';
// @ts-ignore
import WhiteLogo from '../../assets/svg/WhiteLogo';
import Navbar from '../../components/Navbar/Navbar';
import ScrollableSection from './ScrollableSection';
// @ts-ignore
import HoomanParallax from '../../assets/images/hooman_parallax.png';
// @ts-ignore
import LeavesParallax from '../../assets/images/leaves_parallax.png';
import { useEffect, useState, useContext } from 'react';
import Footer from 'src/components/Footer/Footer';
import { UserContext } from 'src/context/UserContext';
import { PageContainer } from 'src/components/PageContainer/PageContainer';

export default function HomePage() {
  const [hoomanScale, setHoomanScale] = useState(0);
  const [hoomanTranslate, setHoomanTranslate] = useState(0);
  const [leavesScale, setLeavesScale] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [titleSpacing, setTitleSpacing] = useState(0);
  const [titleTranslateY, setTitleTranslateY] = useState(0);
  const user = useContext(UserContext);
  useEffect(() => {
    setHoomanScale(window.scrollY / 7000 + 1);
    setHoomanTranslate(window.scrollY / 95 + 1);
    setLeavesScale(window.scrollY / 2500 + 1.25);
    setBrightness(window.scrollY / 20 + 40);
    setTitleTranslateY(window.scrollY);

    window.addEventListener('scroll', () => {
      setHoomanScale(window.scrollY / 7000 + 1);
      setHoomanTranslate(window.scrollY / 95 + 1);
      setLeavesScale(window.scrollY / 2500 + 1.25);
      setBrightness(window.scrollY / 20 + 40);
      setTitleSpacing(window.scrollY / 50 + 2);
      setTitleTranslateY(window.scrollY);
    });
  }, []);

  return (
    <PageContainer>
      <Navbar topTransparent={true} />
      <HeroSection>
        <Header>
          <WhiteLogo />
          <ButtonsContainer>
            <Link to="/browse">biciclete</Link>
            <Link to="/browse">vinde</Link>
            {user?.isAuthenticated ? (
              <Link to="/user">profil</Link>
            ) : (
              <>
                <Link to="/login">log in</Link>
                <Link to="/signup">sign up</Link>
              </>
            )}
          </ButtonsContainer>
        </Header>
        <ParallaxContainer
          hoomanScale={hoomanScale}
          leavesScale={leavesScale}
          brightness={brightness}
          hoomanTranslate={hoomanTranslate}
        >
          <HeroTitle spacing={titleSpacing} translateY={titleTranslateY}>
            Second Cycle
          </HeroTitle>
          <img src={HoomanParallax} id="hooman" />
          <img src={LeavesParallax} id="leaves" />
        </ParallaxContainer>
      </HeroSection>
      <ScrollableSection />

      {/* <Stripe>
        <Link to="">Choose your very own bike</Link>
        <Link to="">Rent your desired bike</Link>
        <Link to="">Sell your bike</Link>
      </Stripe> */}
    </PageContainer>
  );
}
