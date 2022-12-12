import readlineSync from 'readline-sync';
import { setQuestions, randomLetter, capitalize } from '../src/random.js';

const vowelsENG = 'aeiouy';
const consonantsENG = 'abcdfghjklmnpqrstvwxz';
const vowelsRU = 'аеиоуяэю';
const consonantsRU = 'бвгджзклмнпрстфчхшщ'

function nameGenerator() {
    console.log('Welcome to the Name Generator!\nDo you want to generate uniq name?');
    const answer = readlineSync.question('Type "yes" to continue: ');
    if (answer.toLowerCase().trim() !== 'yes') {
        return 'If you want to generate random name, you need to answer "yes"';
    } 
    const answers = setQuestions();
    
    if (answers[1].toLowerCase().trim() === 'ru') return capitalize(randomLetter(vowelsRU, consonantsRU, answers[0]));
    if (answers[1].toLowerCase().trim() === 'en') return capitalize(randomLetter(vowelsENG, consonantsENG, answers[0]));

    return 'Error: undefined language!';
}

console.log(nameGenerator());

export default nameGenerator;
