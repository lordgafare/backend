import * as dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  ENDPOINT_URL,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env;

const config = {
  PORT,
  ENDPOINT_URL,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
};

export default config;
