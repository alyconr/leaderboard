export const getScores = (gameId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`
      );
      if (response.ok) {
        const data = await response.json();
        resolve(data.result); // Resolve the promise with the retrieved scores
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      reject(error); // Reject the promise with the error
    }
  });
};
