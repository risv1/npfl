import { NewUser, UpdateUser } from "@/types/users";
import { db } from "../database/db";
import { UserModel, users } from "../database/schema";
import { eq } from "drizzle-orm";
import { ERR_NO_USERS_FOUND, ERR_USER_EXISTS, ReturnError } from "../constants/errors";

export const insertUser = async (user: NewUser) => {
    try {
        const [fetchUser] = await db.select().from(users).where(eq(users.email, user.email))
        if (fetchUser.email) {
            return ERR_USER_EXISTS
        }
        await db.insert(users).values(user)
    } catch (error) {
        return error;
    }
}

export const getUsers = async() => {
    try {
        const fetchUsers = await db.select().from(users)
        if (fetchUsers.length === 0) {
            return ERR_NO_USERS_FOUND
        }
        return fetchUsers
    } catch (error) {
        return error
    }
}

export const getUserById: (id: number) => Promise<UserModel | ReturnError> = async(id: number) => {
    const [fetchUser] = await db.select().from(users).where(eq(users.id, id))
    if (!fetchUser) {
        return ERR_NO_USERS_FOUND
    }
    return fetchUser
}

export const getUserByEmail: (email: string)=>Promise<UserModel | ReturnError> = async(email: string) => {
    const [fetchUser] = await db.select().from(users).where(eq(users.email, email))
    if (!fetchUser) {
        return ERR_NO_USERS_FOUND
    }
    return fetchUser
}

export const getUserByName: (name: string) => Promise<UserModel | ReturnError> = async(name: string) => {
    const [fetchUser] = await db.select().from(users).where(eq(users.name, name))
    if (!fetchUser) {
        return ERR_NO_USERS_FOUND
    }
    return fetchUser
}

export const updateUser = async (id: number, user: UpdateUser) => {
    try {
        await db.update(users).set(user).where(eq(users.id, id))
    } catch (error) {
        return error
    }
}

export const deleteUser = async (id: number) => {
    try {
        await db.delete(users).where(eq(users.id, id))
    } catch (error) {
        return error
    }
}

