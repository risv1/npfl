export type User = {
    id?: number;
    name: string;
    email: string;
}

export type NewUser = {
    name: string;
    email: string;
    password: string;
}

export type UpdateUser = {
    name?: string;
    email?: string;
    password?: string;
}