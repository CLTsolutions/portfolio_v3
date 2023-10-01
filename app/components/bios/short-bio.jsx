import socialLinks from '../../data';

const ShortBio = () => {
  const text =
    "I'm Chelsey, a former flight attendant turned software engineer with a passion for flight, code, and learning new technologies. When not crafting software or nurturing my green thumb, you'll often find me drumming up excitement as I learn the art of percussion. Dreams of one day having a garden, chickens, and maybe even a dairy cow (or two!) fill my spare moments.";

  return (
    <p className="text-justify text-sm">
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
