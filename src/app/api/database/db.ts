import postgres from 'postgres';
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(Bun.env.DB_URL!);
export const db = drizzle(client)