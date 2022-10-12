import { API_URL } from "../../configuration";

export async function modifyFriend(friend: any){
  await fetch(`${API_URL}friends/modify`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friend),
    })
    .then((response) => response)
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    .catch((error) => {
      console.error('Error:', error);
  });
}