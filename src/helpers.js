const getRandomNum = (min, max) => {
  const min = Math.ceil(min);
  const max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = (numbers) => getRandomNum(0, numbers.length - 1);

export { getRandomNum, data };
