import { createGame } from './createGame.js';

export const initGame = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const startGameBtn = document.getElementById('startGame');
    const overlay = document.querySelector('.overlay');

    let modalDiv; // Declare modalDiv variable
    const closeModal = () => {
      modalDiv.remove();
      overlay.classList.remove('active');
    };

    const renderGameDropdown = () => {
      const gameList = document.getElementById('gameIdList');
      gameList.innerHTML = '';

      // Retrieve array of games from local storage or create an empty array
      const games = JSON.parse(localStorage.getItem('games')) || [];

      // Create a default placeholder option
      const defaultOption = document.createElement('option');
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = 'Select Game';
      gameList.appendChild(defaultOption);

      // Populate the dropdown with the game objects
      if (games.length > 0) {
        games.forEach((game) => {
          const option = document.createElement('option');
          option.value = game.gameId;
          option.textContent = game.gameName;
          gameList.appendChild(option);
        });
      } else {
        createGame();
      }
    };

    startGameBtn.addEventListener('click', () => {
      modalDiv = document.createElement('div'); // Assign value to modalDiv
      modalDiv.classList.add('modal');
      overlay.classList.toggle('active');

      const closeButton = document.createElement('span');
      closeButton.textContent = 'X';
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', closeModal);

      modalDiv.appendChild(closeButton);

      const modalTitle = document.createElement('h3');
      modalTitle.textContent = 'Create a New Game';
      modalDiv.appendChild(modalTitle);

      const form = document.createElement('form');
      form.id = 'input-score';

      const inputName = document.createElement('input');
      inputName.classList.add('name-input');
      inputName.type = 'text';
      inputName.name = 'name';
      inputName.id = 'name';
      inputName.placeholder = 'Game Name';
      form.appendChild(inputName);

      const submitBtn = document.createElement('input');
      submitBtn.classList.add('btn-submit');
      submitBtn.type = 'submit';
      submitBtn.value = 'Create Game';
      form.appendChild(submitBtn);
      modalDiv.appendChild(form);
      const modalSection = document.getElementById('modal-section');
      modalSection.appendChild(modalDiv);

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const gameName = inputName.value;
        await createGame(gameName);

        if (gameName.trim() === '') {
          const alertMessage = document.createElement('span');
          alertMessage.textContent = 'Please enter a name for your Game';
          alertMessage.style.color = 'red';
          alertMessage.style.textAlign = 'center';
          alertMessage.style.fontWeight = 'bold';
          alertMessage.style.display = 'block';
          modalDiv.appendChild(alertMessage);

          return;
        }

        if (gameName) {
          try {
            createGame(gameName);
            document.getElementById('alertMessage').textContent = '';
            document.getElementById('errorMessage').textContent = '';
            document.getElementById('scoreAlertMessage').textContent = '';
          } catch (error) {
            console.log(error);
          }
        }

        // Save game name in local storage
        localStorage.setItem('gameName', gameName);

        // Retrieve array of games from local storage or create an empty array if it doesn't exist
        const games = JSON.parse(localStorage.getItem('games')) || [];

        // Create a new game object
        const newGame = {
          gameId: localStorage.getItem('gameId'),
          gameName: gameName,
        };

        // Push the new game object to the array
        games.push(newGame);

        // Save the updated array back to local storage
        localStorage.setItem('games', JSON.stringify(games));

        if (inputName.value) {
          closeModal();
        }

        renderGameDropdown();
      });
    });

    renderGameDropdown();
  });
};
