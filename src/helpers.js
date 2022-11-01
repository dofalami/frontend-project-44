const getRandomNum = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

const data = (numbers) => getRandomNum(0, numbers.length - 1);

export { getRandomNum, data };
