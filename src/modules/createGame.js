export const createGame = async (gameName) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: gameName }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const gameId = data.result.split(' ')[3];
      localStorage.setItem('gameId', gameId);
    } else {
      throw new Error('Failed to create the game.');
    }
  } catch (error) {
    console.log(error);
  }
};
