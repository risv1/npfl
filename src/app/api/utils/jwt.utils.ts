import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../../env";

export type UserPayload = {
    id: number;
    admin: boolean;
}

export const generateJwt = (payload: UserPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};