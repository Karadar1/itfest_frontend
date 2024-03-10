import React from 'react';
import styled from '@emotion/styled';

export function PageContainer(props: PropsType) {
  return <Wrapper>{props.children}</Wrapper>;
}

type PropsType = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  background: #fff;
  height: 70px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-grow: 1;
`;
const Sidemenu = styled.div`
  flex: 0 0 auto;
  width: 320px;
  background: #09c;
  border: 2px solid yellow;
`;
const PageWrapper = styled.div`
  background: #fff;
  border: 2px solid green;
  flex-grow: 1;
`;

const NavItems = styled.div`
  color: white;
  position: sticky;
  top: 10px;
`;
