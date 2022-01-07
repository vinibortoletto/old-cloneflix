// Libs
import React from 'react';

// Components
import Hero from './Hero/Hero';
import Section from './Section/Section';
import Separator from '../../components/Separator/Separator';
import Faq from './Faq/Faq';

// Contexts
import { useData } from '../../contexts/Data';

export default function Landing() {
  const { data } = useData();
  const { sections } = data.pages.landing;

  return (
    <>
      <Hero />
      <Separator />

      <div>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            imgAlt={section.imgAlt}
          />
        ))}
      </div>

      <Faq />
      <Separator />
    </>
  );
}
