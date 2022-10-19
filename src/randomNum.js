export default function getRandom() {
    const random = Math.random() * 100;
    const getRandom = Math.trunc(random);
    return getRandom;
  }
