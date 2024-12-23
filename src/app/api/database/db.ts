import postgres from 'postgres';
import { drizzle } from "drizzle-orm/postgres-js";
import { DB_URL } from '../../../../env';

const client = postgres(DB_URL);
export const db = drizzle(client)