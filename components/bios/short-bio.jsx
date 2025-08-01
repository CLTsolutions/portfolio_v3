import { shortBioText } from '@/data';

const ShortBio = () => {
  const text = shortBioText;

  return <p className="text text-justify">{text}</p>;
};

export default ShortBio;
