import React from 'react';
import Separator from '../../components/Separator/Separator';

// Components
import Header from './Header/Header';
import Hero from './Hero/Hero';

// Styles
import Section from './Section/Section';

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Separator />
        <Section />
      </main>
    </>
  );
}
