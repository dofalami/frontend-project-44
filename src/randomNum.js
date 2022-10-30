const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomIndex = (numbers) => getRandomNumber(0, numbers.length);

export { getRandom, getRandomIndex };
