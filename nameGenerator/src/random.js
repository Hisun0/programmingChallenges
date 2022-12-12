import readlineSync from 'readline-sync';

function setQuestions() {
    const arrOfValues = [];
    const nameLength = readlineSync.question('What name length do you want?\n');
    const nameLanguage = readlineSync.question('What language of name do you want?\nru/en: ');
    arrOfValues.push(nameLength, nameLanguage);
    return arrOfValues;
}

function randomVowel(vowel) {
    const vowelIndex = Math.floor(Math.random() * vowel.length);
    return vowel[vowelIndex];
}

function randomConsonant(consonant) {
    const consonantIndex = Math.floor(Math.random() * consonant.length);
    return consonant[consonantIndex];
}

function checkLetter(letters, symbol) {
    for (const letter of letters) {
        if (letter === symbol) {
            return letter;
        }
    }
    return false;
}

function randomLetter(vowels, consonants, nameLength) {
    let resultName = '';
    
    for (let letter = 0; letter < nameLength; letter += 1) {
        let vowel = randomVowel(vowels);
        let consonant = randomConsonant(consonants);
        
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
