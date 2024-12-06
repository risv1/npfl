import { defineConfig } from "drizzle-kit";
import { DB_URL } from "./env";

export default defineConfig({
    schema: "src/app/api/database/schema.ts",
    out: "./.drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: DB_URL,
    }
})