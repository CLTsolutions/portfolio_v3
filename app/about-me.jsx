'use client';

import React, { useState } from 'react';

import BioButton from './shared';

export default function AboutMe() {
  const [showShortBio, setShowShortBio] = useState(true);

  const introText = (
    <>
      {'Hi '}
      <span role="img" aria-label="waving-hand">
        👋
      </span>
      {", I'm Chelsey!"}
    </>
  );

  const handleClick = (val) => setShowShortBio(val);

  return (
    <section>
      <header className="text-4xl font-bold"></header>
      <div>
        {/* <img src="/images/ChelseyTschida.jpg" alt="Chelsey Tschida" className="rounded-full w-1/2" /> */}
        <p className="text-lg font-bold" x>
          {introText}
        </p>
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
        <div className="mt-4">
          {showShortBio ? (
            <p>This is the short bio...</p>
          ) : (
            <p>This is the long bio...</p>
          )}
        </div>
      </div>
    </section>
  );
}
