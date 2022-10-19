export default function getRandom() {
    const random = Math.random() * 100;
    const result = Math.trunc(random);
    return result;
  };
