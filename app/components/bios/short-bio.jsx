import socialLinks from '../../data';

const ShortBio = () => {
  const text =
    "I'm Chelsey, a former flight attendant turned software engineer. I chose to transition my career into software because it lets me use my creative side to enhance people's web experience. I take great satisfaction knowing in this web centric world that I'm an important piece of what keeps it going. One day I hope to have a garden and chickens.";

  return (
    <p className="text text-justify">
      {text}
      <br />
      <br />
      Explore my
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        className="no-underline hover:link-accent hover:no-underline"
      >
        {' '}
        Github{' '}
      </a>
      for my coding adventures.
    </p>
  );
};

export default ShortBio;
