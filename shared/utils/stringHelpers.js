/**
 * Converts a string to title case (capitalizes first letter of each word)
 * @param {string} str - The string to convert
 * @returns {string} The title-cased string
 * @example
 * toTitleCase('hello world') // 'Hello World'
 * toTitleCase('short bIo') // 'Short Bio'
 */

export const toTitleCase = (str) => {
  if (!str || typeof str !== 'string') return str;
  return str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export default toTitleCase;