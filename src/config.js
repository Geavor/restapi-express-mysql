import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || 'DBHOST';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'DBUSER';
export const DB_PASSWORD =
  process.env.DB_PASSWORD ||
  'DBPASSWORD';
export const DB_DATABASE = process.env.DB_DATABASE || 'DBNAME';

