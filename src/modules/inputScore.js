import { submitUserScore } from './userScore.js';

export const inputScore = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const userInputScore = document.getElementById('user-score');

    userInputScore.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('name-post').value;
      const score = document.getElementById('score-post').value;
      const gameId = document.getElementById('gameIdList').value;

      if (name.trim() === '' || score.trim() === '') {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = 'Please enter a name and score';
        alertMessage.style.color = 'red';
        alertMessage.style.textAlign = 'center';
        alertMessage.style.fontWeight = 'bold';
        alertMessage.style.display = 'block';
        return;
      }

      if (!gameId || gameId === 'Select Game') {
        const alertMessage = document.getElementById('errorMessage');
        alertMessage.textContent = 'Please select a game or Start a new one';
        alertMessage.style.color = 'red';
        alertMessage.style.textAlign = 'center';
        alertMessage.style.fontWeight = 'bold';
        alertMessage.style.display = 'block';
        return;
      }

      if (gameId) {
        submitUserScore(gameId, name, score)
          .then(() => {
            // Clear input fields
            document.getElementById('name-post').value = '';
            document.getElementById('score-post').value = '';
            document.getElementById('errorMessage').textContent = '';
            document.getElementById('alertMessage').textContent = '';
            document.getElementById('scoreAlertMessage').textContent = '';
          })
          .catch((error) => {
            console.log('Error submitting user score:', error);
          });
      } else {
        console.log('No gameId found.');
      }
    });
  });
};
