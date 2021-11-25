import React from 'react';
import Separator from '../../components/Separator/Separator';
import { useData } from '../../contexts/Data';

// Components
import Hero from './Hero/Hero';
import Section from './Section/Section';

export default function Landing() {
  const { data } = useData();
  const { sections } = data.landing;

  return (
    <>
      <Hero />
      <Separator />

      <div>
        {sections.map((section) => (
          <>
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              imgAlt={section.imgAlt}
            />
            <Separator />
          </>
        ))}
      </div>
    </>
  );
}
