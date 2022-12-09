import readlineSync from 'readline-sync';

const vowels = 'aeiouy';
const consonants = 'abcdfghjklmnpqrstvwxz';

function setQuestions() {
    const nameLength = readlineSync.question('What name length do you want?\n');
    return nameLength;
}

function randomVowel() {
    const vowelIndex = Math.floor(Math.random() * vowels.length);
    return vowels[vowelIndex];
}

function randomConsonant() {
    const consonantIndex = Math.floor(Math.random() * consonants.length);
    return consonants[consonantIndex];
}

function checkLetter(letters, symbol) {
    for (const letter of letters) {
        if (letter === symbol) {
            return letter;
        }
    }
    return false;
}

function randomLetter() {
    
    const nameLength = setQuestions();
    let resultName = '';

    for (let letter = 0; letter < nameLength; letter += 1) {
        let vowel = randomVowel();
        let consonant = randomConsonant();
        
        if (resultName.length === 0) resultName += consonant;

        if (resultName[letter - 1] === checkLetter(vowels, resultName[letter - 1])) {
            resultName += consonant;
        } else if (resultName[letter - 1] === checkLetter(consonants, resultName[letter - 1])) {
            resultName += vowel;
        }
    }
    return resultName;
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

export { setQuestions, randomLetter, capitalize, randomConsonant, randomVowel };
