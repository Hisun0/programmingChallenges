import readlineSync from 'readline-sync';

function game() {
    const answers = ['Heads', 'Tails'];
    const answer = Math.floor(Math.random() * 2);
    
    const playerAnswer = readlineSync.question('Welcome to the Heads or Tails game!\nChoose your prediction!\nHeads/Tails: ');
    const correctAnswer = answers[answer];

    if (playerAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) return 'Congratulations, you are right!';
    return 'No ;( You can try again!';
}

console.log(game());

export default game;