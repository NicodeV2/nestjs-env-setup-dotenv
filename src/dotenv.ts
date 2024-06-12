import * as dotenv from 'dotenv'; // Import dotenv module

dotenv.config(); // Load .env file
// Load environment variables
export const env = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
};
