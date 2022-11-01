const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = (numbers) => getRandomNum(0, numbers.length - 1);

export { getRandomNum, data };
