import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "meubanco",
  synchronize: false, 
  logging: false,
  entities: ["src/models/*.ts"],
  migrations: ["src/migration/*.ts"],  
  subscribers: ["./src/subscribers/*.ts"],
});
