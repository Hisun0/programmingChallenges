import readlineSync from 'readline-sync';
import { setQuestions, randomLetter, capitalize, randomVowel } from '../src/random.js';

function nameGenerator() {
    console.log('Welcome to the Name Generator!\nDo you want to generate uniq name?');
    const answer = readlineSync.question('Type "yes" to continue: ');

    return capitalize(randomLetter());
}

console.log(nameGenerator());

export default nameGenerator;
