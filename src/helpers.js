const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => {
  const min = 0;
  const max = data.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomNumber, getRandomIndex };
