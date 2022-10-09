import express from "express";
import { PORT } from "./configuration";
import { AppDataSource } from "./database";
import { rootRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(rootRouter);

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
		app.listen(PORT);
		console.log("Server listening on port ", PORT);

		AppDataSource.runMigrations()
			.then(() => {
				console.log("The migration is successfully running");
			})
			.catch((err) => {
				console.log("Error during migration", err);
			});
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err);
	});
