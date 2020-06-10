import readlineSync from 'readline-sync';
import greeting from './cli.js';

const generateNumber = () => Math.ceil(Math.random() * 10);
const checkUserAnswer = (number, answer) => {
  if (answer !== 'yes' && answer !== 'no') {
    return { isCorrect: false, message: 'Wrong input' };
  }
  if (number % 2 !== 0 && answer !== 'no') {
    return { isCorrect: false, message: '"yes" is wrong answer ;(. Correct answer was "no".' };
  }
  if (number % 2 === 0 && answer !== 'yes') {
    return { isCorrect: false, message: '"no" is wrong answer ;(. Correct answer was "yes".' };
  }
  return { isCorrect: true, message: 'Correct' };
};

const game = () => {
  const newNumber = generateNumber();
  console.log(`Question: ${newNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const checkedResult = checkUserAnswer(newNumber, userAnswer);
  return checkedResult;
};

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; ; i += 1) {
    const gameResult = game();
    if (!gameResult.isCorrect) {
      console.log(gameResult.message);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(gameResult.message);
    if (i > 1) {
      console.log('Congratulations!');
      break;
    }
  }
};
