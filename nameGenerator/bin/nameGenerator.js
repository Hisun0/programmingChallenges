import readlineSync from 'readline-sync';
import { setQuestions, randomLetter, capitalize, randomVowel } from '../src/random.js';

const vowelsENG = 'aeiouy';
const consonantsENG = 'abcdfghjklmnpqrstvwxz';
const vowelsRU = 'аеиоуяэю';
const consonantsRU = 'бвгджзклмнпрстфчхшщ'

function nameGenerator() {
    console.log('Welcome to the Name Generator!\nDo you want to generate uniq name?');
    const answer = readlineSync.question('Type "yes" to continue: ');
    if (answer.toLowerCase().trim() !== 'yes') {
        return 'Ну и иди в пизду';
    } 
    const answers = setQuestions();
    
    if (answers[1].toLowerCase().trim() === 'ru') return capitalize(randomLetter(vowelsRU, consonantsRU, answers[0]));
    if (answers[1].toLowerCase().trim() === 'en') return capitalize(randomLetter(vowelsENG, consonantsENG, answers[0]));

    return 'надо тренироваться бро';
}

console.log(nameGenerator());

export default nameGenerator;
