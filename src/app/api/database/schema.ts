import { InferSelectModel } from "drizzle-orm";
import { boolean, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roleEnums = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    role: text("role").notNull().default("user"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    deletedAt: timestamp("deleted_at"),
    isDeleted: boolean("is_deleted").notNull().default(false),
})

export type UserModel = InferSelectModel<typeof users>;