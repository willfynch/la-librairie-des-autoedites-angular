export function getThreeRandomNumbers(numbers: number[]): number[] {
  
    const initialList = numbers;
    const randomNumbers: number[] = [];
    const max = initialList.length;

    while(randomNumbers.length < 3){
        const random = getRandomInt(max);
        if(!randomNumbers.includes(random)){
            randomNumbers.push(random)
        }
    }

  return randomNumbers;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
