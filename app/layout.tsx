'use client';

import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { merriweather } from './ui/fonts';
import NavLinks from './ui/nav-links';
import Image from 'next/image'

const { Header, Footer, Sider } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={merriweather.className} style={{ marginLeft: '0rem', marginRight: '0rem', marginTop: '0rem' }}>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', marginRight: '1rem', marginTop: '0.5rem', borderRadius: borderRadiusLG, padding: '1rem' }}>
            <div className="demo-logo">
              <Image style={{ maxHeight: 100, textAlign: 'center', marginLeft: '0rem', marginTop: '2.5rem', marginRight: '1rem', marginBottom: '1rem' }}
                src={'/fiuba.png'}
                width={40}
                height={40}
                alt={''}
              />
            </div>
            <NavLinks />
          </Header>
          {children}
          <Footer style={{ textAlign: 'center' }}>
            Introducción al Desarrollo de Software © {new Date().getFullYear()} Created by Carolina Di Matteo ® Maintained by Carolina Di Matteo & Francisco O. Lorda
          </Footer>
        </Layout>
      </body>
    </html >
  );
}
