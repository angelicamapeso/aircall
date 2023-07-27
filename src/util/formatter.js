export const capitalize = (word) => {
  const capital = word.toUpperCase();
  return capital.charAt(0) + word.slice(1);
};
