import { JwtPayload } from "jsonwebtoken";
import { verifyJwt } from "../utils/jwt.utils"
import { getUserById } from "./users.service";;

export const checkUserAuth = async (token: string) => {
    const payload = verifyJwt(token) as JwtPayload;
    const userId = payload.id;

    if (!userId) {
        return false
    }

    try {
        const getUser = await getUserById(userId);
        if (getUser) {
            return true
        }
    } catch (error) {
        console.error(error)
        return false
    }
}

export const returnCreds = async (token: string) => {
    const payload = verifyJwt(token) as JwtPayload;
    const userId = payload.id;

    if (!userId) {
        return false
    }

    try {
        const getUser = await getUserById(userId);
        if (getUser) {
            return {
                id: payload.id,
                role: payload.role
            }
        }
    } catch (error) {
        console.error(error)
        return false
    }
}