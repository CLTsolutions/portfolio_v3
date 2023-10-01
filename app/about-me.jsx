'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { ShortBio } from './components/bios';
import BioButton from './shared';
import socialLinks from './data';

export default function AboutMe() {
  const [showShortBio, setShowShortBio] = useState(true);

  const companyText = (
    <a
      href="https://olio.health"
      target="_blank"
      rel="noreferrer"
      className="no-underline hover:link-accent hover:no-underline"
    >
      Olio
    </a>
  );

  const introText = (
    <>
      {'Hey there! '}
      <span role="img" aria-label="waving-hand">
        👋
      </span>
    </>
  );

  const socialLinksList = () => {
    const links = Object.entries(socialLinks).map(([key, value]) => (
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

  return (
    <>
      <header className="flex flex-wrap items-center justify-center md:flex-nowrap">
        <div>
          <h1 className="mb-0 sm:text-3xl md:text-5xl">Chelsey Tschida</h1>
          <h2 className="mt-4">Software Engineer @ {companyText}</h2>
          {/* <img src="/images/ChelseyTschida.jpg" alt="Chelsey Tschida" className="rounded-full w-1/2" /> */}
        </div>
        <div className="h-72 w-72 flex-wrap overflow-hidden rounded-full">
          <Image
            src="/images/ct-plane.jpg"
            height={300}
            width={300}
            alt="Chelsey in-flight in commercial airplane wearing pilot headset"
            // className="not-prose rounded-full object-none object-[50%_-4px]"
            // className="not-prose rounded-full"
            // className="not-prose h-[24px] w-[24px] overflow-hidden rounded-full"
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
        <p className="text-lg font-bold">{introText}</p>
        <article className="mt-4">
          {showShortBio ? <ShortBio /> : <p>This is the long bio...</p>}
        </article>
      </main>
    </>
  );
}
