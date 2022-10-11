import React from "react";
import { Routes, Route } from "react-router-dom";
import { FriendsPage, ModifyPage, NewFriendPage } from "../../pages";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/modify" element={<ModifyPage />} />
			<Route path="/new" element={<NewFriendPage />} />

			<Route path="*" element={<FriendsPage />} />
		</Routes>
	);
}

