const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomIndex = (numbers) => getRandom(0, numbers.length);

export { getRandom, getRandomIndex };
