import React from "react";
import { Routes, Route } from "react-router-dom";
import { FriendsPage } from "../../pages/FriendsPage";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<FriendsPage />} />
		</Routes>
	);
}

