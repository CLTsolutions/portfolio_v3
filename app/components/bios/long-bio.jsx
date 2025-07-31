import { longBioText } from '../../data';

const LongBio = () => {
  const renderParagraphs = (text) =>
    text.split('\n\n').map((paragraph, index) => (
      <p className="text text-justify" key={index}>
        {paragraph}
      </p>
    ));

  return <>{renderParagraphs(longBioText)}</>;
};

export default LongBio;
