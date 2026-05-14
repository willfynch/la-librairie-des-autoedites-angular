import { getThreeRandomNumbers } from './helpers';

describe('Helpers', () => {
  const numbers = [0, 1, 2, 3, 4, 5];

  it('should return 3 items', () => {
    // act
    const randomNumbers = getThreeRandomNumbers(numbers);

    // assert
    expect(randomNumbers.length).toBe(3);
  });

  it('should return existing items in the list', () => {
    // act
    const randomNumbers = getThreeRandomNumbers(numbers);
    // assert
    randomNumbers.forEach((number) => {
      expect(numbers.includes(number)).toBe(true);
    });
  });

  it('should return no duplicates in the result', () => {
    // act
    const randomNumbers = getThreeRandomNumbers(numbers);
    // assert
    const randomNumbersAsSet = new Set(randomNumbers);
    
    expect(randomNumbers.length).toBe(randomNumbersAsSet.size);
  });
});
