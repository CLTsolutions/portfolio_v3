'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { LongBio, ShortBio } from './components/bios';
import { companyText, introText, socialLinks } from './data';
import BioButton from './shared';

export default function AboutMe() {
  const [showShortBio, setShowShortBio] = useState(true);

  const socialLinksList = () => {
    if (!socialLinks) return null;

    const links = Object.entries(socialLinks)?.map(([key, value]) => (
      <a
        href={value}
        key={key}
        target="_blank"
        rel="noreferrer"
        className="mr-2 text-yellow-400 no-underline hover:link-secondary last:mr-0"
      >
        {key}
      </a>
    ));

    return <div>{links}</div>;
  };

  const handleClick = (val) => setShowShortBio(val);
  const bioToShow = showShortBio ? <ShortBio /> : <LongBio />;

  return (
    <>
      <header className="flex flex-col flex-wrap items-center justify-center md:flex-nowrap lg:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="mb-0 sm:text-3xl md:text-5xl">Chelsey Tschida</h1>
          <h2 className="mt-4">Software Engineer @ {companyText}</h2>
        </div>
        <div className="h-72 w-72 flex-wrap overflow-hidden rounded-full">
          <Image
            src="/images/ct-plane.jpg"
            height={300}
            width={300}
            alt="Chelsey in-flight in commercial airplane wearing pilot headset"
            className="not-prose object-top-right w-full"
          />
        </div>
      </header>
      <section className="mt-7 flex justify-between">
        <div>
          <BioButton
            label="Short Bio"
            active={showShortBio}
            onClick={() => handleClick(true)}
          />
          <BioButton
            label="Long Bio"
            active={!showShortBio}
            onClick={() => handleClick(false)}
          />
        </div>
        {socialLinksList()}
      </section>
      <main>
        <h3 className="text-xl font-bold">{introText}</h3>
        <article className="mt-4">{bioToShow}</article>
      </main>
    </>
  );
}
