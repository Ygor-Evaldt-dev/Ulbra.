import { knex as knexClient, Knex } from "knex";
import { env } from "./env";

const { DATABASE_CLIENT, DATABASE_URL, NODE_ENV } = env;

const sqLiteConnection = {
  filename:
    NODE_ENV === "test" ? "./temp-database/test.db" : "./temp-database/app.db",
};

export const config: Knex.Config = {
  client: DATABASE_CLIENT,
  connection: DATABASE_CLIENT === "sqlite" ? sqLiteConnection : DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./temp-database/migrations",
  },
};

export const knex: knexClient.Knex = knexClient(config);
