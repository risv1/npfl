import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "src/app/api/database/schema.ts",
    out: "./.drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: Bun.env.DB_URL!,
    }
})