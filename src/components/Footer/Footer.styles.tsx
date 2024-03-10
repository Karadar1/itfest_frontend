/* eslint-disable prettier/prettier */
import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 35vh;
  width: 99.3vw;
  background-color: #dad2d8;
`;
//Social Links
export const FooterSocials = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 20vw;
  margin: 50px 0px;
`;
export const SocialsRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const IconWrap = styled.div`
  height: 40px;
  width: 40px;
  margin: 10px 10px 10pxpx 10px;
`;

//Footer important links section
export const FooterLinksColumn = styled.div`
  diplay: flex;
  flex-direction: column;
  height: 200px;
  width: 150px;
`;
export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  margin: 50px 0px;
`;
export const LinkItem = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;
export const ColumnTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;
//Footer online payment

export const FooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
  margin: 50px 0px;
`;
export const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
`;
