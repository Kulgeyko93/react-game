export const generateAnswer = () => {
  const result = ['Paper', 'Rock', 'Scissors'];

  return result[Math.floor(Math.random() * result.length)];
};
