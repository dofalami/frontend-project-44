const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const getRandomIndex = (data) => getRandomNumber(0, data.length - 1);
const getRandomIndex = (data) => {
  const min = 0;
  const max = data.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomNumber, getRandomIndex };
