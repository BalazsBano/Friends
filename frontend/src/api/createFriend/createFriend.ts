import { API_URL } from "../../configuration";

export async function createNewFriend(friend: Object){
  await fetch(`${API_URL}friends/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friend),
    })
    .then((response) => response)
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
  });
}