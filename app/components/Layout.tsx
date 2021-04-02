import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styled from 'styled-components';

type Props = {
  children?: ReactNode
}

const Content = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;

const Layout = ({ children }: Props) => (
  <>
    <Head key='layout-12341234'>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>
    <Navbar />
    <Content>
      {children}
    </Content>
  </>
)

export default Layout;