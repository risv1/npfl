export type ReturnError = {
    status: number;
    message: string;
    prettyMessage: string;
}

const ERR_BAD_REQUEST: ReturnError = {
    status: 400,
    message: 'Bad request',
    prettyMessage: 'The request you made was invalid'
}

const ERR_INVALID_CREDENTIALS: ReturnError = {
    status: 401,
    message: 'Invalid credentials',
    prettyMessage: 'The credentials you provided are invalid'
} 

const ERR_INVALID_TOKEN: ReturnError = {
    status: 401,
    message: 'Invalid token',
    prettyMessage: 'The token you provided is invalid'
}

const ERR_INVALID_EMAIL: ReturnError = {
    status: 400,
    message: 'Invalid email',
    prettyMessage: 'The email you provided is invalid'
}

const ERR_INVALID_PASSWORD: ReturnError = {
    status: 400,
    message: 'Invalid password',
    prettyMessage: 'The password you provided is invalid'
}

const ERR_USER_EXISTS: ReturnError = {
    status: 400,
    message: 'User exists',
    prettyMessage: 'The user you are trying to create already exists'
}

const ERR_NO_USERS_FOUND = {
    status: 404,
    message: 'No users found',
    prettyMessage: 'No users were found'
}

const ERR_UNAUTHORIZED: ReturnError = {
    status: 401,
    message: 'Unauthorized',
    prettyMessage: 'You are not authorized to access this resource'
}

const ERR_FORBIDDEN: ReturnError = {
    status: 403,
    message: 'Forbidden',
    prettyMessage: 'You are forbidden from accessing this resource'
}

const ERR_NOT_FOUND: ReturnError = {
    status: 404,
    message: 'Not found',
    prettyMessage: 'The resource you are looking for does not exist'
}

const ERR_INTERNAL_SERVER_ERROR: ReturnError = {
    status: 500,
    message: 'Internal server error',
    prettyMessage: 'An internal server error occurred'
}

export {
    ERR_BAD_REQUEST,
    ERR_INVALID_CREDENTIALS,
    ERR_INVALID_TOKEN,
    ERR_INVALID_EMAIL,
    ERR_INVALID_PASSWORD,
    ERR_USER_EXISTS,
    ERR_NO_USERS_FOUND,
    ERR_UNAUTHORIZED,
    ERR_FORBIDDEN,
    ERR_NOT_FOUND,
    ERR_INTERNAL_SERVER_ERROR
}