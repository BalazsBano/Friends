import { DataSource } from "typeorm";
import { DB_PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from "../configuration";
import { Friend, Food } from "./entity";

export const AppDataSource = new DataSource({
  migrationsTableName: "migrations",
	type: "mysql",
	host: DB_HOST,
	port: Number(DB_PORT),
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE,
	synchronize: true,
	logging: false,
	multipleStatements: true,
	entities: [ Friend, Food ],
	subscribers: [],
	migrations: [],
})