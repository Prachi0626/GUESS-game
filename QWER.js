let originalWord = '';
let jumbledWord = '';
let isAnswerVisible = false;

function jumbleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayJumbledWord() {
    document.getElementById('jumbled-word').textContent = isAnswerVisible ? originalWord : jumbledWord;
}

function checkGuess() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const resultMessage = document.getElementById('result-message');
    const correctAnswer = document.getElementById('correct-answer');

    if (userInput === '') {
        resultMessage.textContent = 'Please enter your guess.';
        resultMessage.style.color = '#e74c3c';
    } else if (isAnswerVisible && userInput === originalWord) {
        resultMessage.textContent = 'You already guessed the correct answer!';
        resultMessage.style.color = '#e74c3c';
    } else if (userInput === originalWord) {
        resultMessage.textContent = 'Correct! Well done.';
        resultMessage.style.color = '#27ae60';
        correctAnswer.textContent = 'Correct Answer: ' + originalWord;
        correctAnswer.style.display = 'block';
    } else {
        resultMessage.textContent = 'Incorrect. Try again.';
        resultMessage.style.color = '#e74c3c';
    }
}

function nextWord() {
    originalWord = prompt('Enter a word:');
    if (originalWord) {
        jumbledWord = jumbleWord(originalWord);
        document.getElementById('user-input').value = '';
        document.getElementById('result-message').textContent = '';
        document.getElementById('correct-answer').style.display = 'none';
        isAnswerVisible = false;
        displayJumbledWord();
    }
}

// Initial setup
nextWord();