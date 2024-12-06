import jwt from "jsonwebtoken";

export type UserPayload = {
    id: number;
    admin: boolean;
}

export const generateJwt = (payload: UserPayload) => {
  return jwt.sign(payload, Bun.env.JWT_SECRET!, { expiresIn: "1h" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, Bun.env.JWT_SECRET!);
};