export const submitUserScore = async (gameId, name, score) => {
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name, score: score }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
  }
};
