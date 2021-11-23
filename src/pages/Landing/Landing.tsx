import React from 'react';
import Separator from '../../components/Separator/Separator';

// Components
import Header from './Header/Header';
import Hero from './Hero/Hero';

// Styles
import * as S from './Landing.styles';

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Separator />
      </main>
    </>
  );
}
