document.addEventListener('DOMContentLoaded', () => {
    const choices = ['piedra', 'papel', 'tijera'];
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const playerChoiceDisplay = document.getElementById('player-choice-display');
    const computerChoiceDisplay = document.getElementById('computer-choice-display');
    const resultText = document.getElementById('result-text');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset-btn');

    let playerScore = 0;
    let computerScore = 0;

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        playerChoiceDisplay.textContent = `Tu elección: ${getEmoji(playerChoice)} ${capitalize(playerChoice)}`;
        computerChoiceDisplay.textContent = `Elección de la computadora: ${getEmoji(computerChoice)} ${capitalize(computerChoice)}`;
        resultText.textContent = result.message;

        if (result.winner === 'player') {
            playerScore++;
            resultText.style.color = '#4CAF50';
        } else if (result.winner === 'computer') {
            computerScore++;
            resultText.style.color = '#f44336';
        } else {
            resultText.style.color = '#333';
        }
        playerScoreDisplay.textContent = `Jugador: ${playerScore}`;
        computerScoreDisplay.textContent = `Computadora: ${computerScore}`;
    }


    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }


    function determineWinner(pChoice, cChoice) {
        if (pChoice === cChoice) {
            return { message: '¡Es un empate!', winner: 'none' };
        }

        if (
            (pChoice === 'piedra' && cChoice === 'tijera') ||
            (pChoice === 'papel' && cChoice === 'piedra') ||
            (pChoice === 'tijera' && cChoice === 'papel')
        ) {
            return { message: '¡Ganaste!', winner: 'player' };
        } else {
            return { message: '¡Perdiste!', winner: 'computer' };
        }
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getEmoji(choice) {
        switch (choice) {
            case 'piedra': return '🪨';
            case 'papel': return '📄';
            case 'tijera': return '✂️';
            default: return '';
        }
    }


    choiceButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            playGame(event.currentTarget.id);
        });
    });


    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = `Jugador: 0`;
        computerScoreDisplay.textContent = `Computadora: 0`;
        playerChoiceDisplay.textContent = `Tu elección: ?`;
        computerChoiceDisplay.textContent = `Elección de la computadora: ?`;
        resultText.textContent = '¡Haz tu elección!';
        resultText.style.color = '#333'; 
    });
});