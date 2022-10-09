import { request } from "../request";

export const fetchAllFriends = () =>
	request<Object>({
		endpoint: "friends/list",
		config: {
			method: "GET",
		},
	});
