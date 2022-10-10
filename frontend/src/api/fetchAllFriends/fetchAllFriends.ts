import { API_URL } from "../../configuration";

// export const fetchAllFriends = () =>
// 	request<Object>({
// 		endpoint: "friends/list",
// 		config: {
// 			method: "GET",
// 		},
// 	});

export const fetchAllFriends = async () => {
	await fetch(`${API_URL}friends/list`)
	.then((response) => {
		if(!response.ok) {
			throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			);
		}
		return response.json()
	})
	.then((data) => {
		console.log(data)
		return data
	})
	.catch((err) => {
		console.log(err.message);
	});
}

