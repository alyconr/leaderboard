import {
  getScores
} from './getScores.js';

export const renderScore = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const renderScores = (scores) => {
      const scoreList = document.getElementById('score-list');
      scoreList.classList.add('score-list');
      scoreList.innerHTML = '';
      console.log(scores);
      if (scores && scores.length > 0) {
        scores.forEach((score, index) => {
          const item = document.createElement('div');
          item.classList.add('item');

          const position = document.createElement('div');
          position.classList.add('pos');
          position.textContent = index + 1;

          const picture = document.createElement('div');
          picture.classList.add('pic');
          const img = document.createElement('img');
          img.src = 'assets/images/icons8-user-default-64.png';
          img.classList.add('img-score');
          picture.appendChild(img);

          const name = document.createElement('div');
          name.classList.add('name');
          name.textContent = score.user;

          const scoreValue = document.createElement('div');
          scoreValue.classList.add('score');
          scoreValue.textContent = score.score;

          item.appendChild(position);
          item.appendChild(picture);
          item.appendChild(name);
          item.appendChild(scoreValue);

          scoreList.appendChild(item);
        });
      } else {
        const noScoresMessage = document.createElement('div');
        noScoresMessage.textContent = 'No scores found for the selected game.';
        scoreList.appendChild(noScoresMessage);
      }
    };

    const getScoreBtn = document.getElementById('getScores');
    getScoreBtn.addEventListener('click', async (event) => {
      event.preventDefault();

      const gameId = document.getElementById('gameIdList').value;

      if (!gameId || gameId === 'Select Game') {
        // If gameId is not selected or gameId is empty
        // Display an error message indicating that a game option must be selected
        const scoreAlertMessage = document.getElementById('scoreAlertMessage');
        scoreAlertMessage.textContent = 'Please select a game or Create a New one';
        scoreAlertMessage.style.color = 'red';
        scoreAlertMessage.style.textAlign = 'center';
        scoreAlertMessage.style.fontWeight = 'bold';
        scoreAlertMessage.style.display = 'block';
        return;
      }

      if (gameId) {
        getScores(gameId)
          .then((scores) => {
            renderScores(scores);
            document.getElementById('scoreAlertMessage').textContent = '';
          })
          .catch((error) => {
            console.log('Error retrieving scores:', error);
          });
      }
    });
  });
};