import { token } from './navMenuMocks';

export const okResponse = {
    status: 200,
    response: {
        code: 200,
        status: 'ok',
        messages: 'User logged in successfully',
        data: token
    }
};

export const unauthorizedResponse = {
    status: 401,
    response: {
        code: 401,
        status: 'ok',
        messages: 'User is not authorized',
        data: token
    }
};

export const createdResponse = {
    status: 201,
    response: {
        code: 201,
        status: 'Created',
        messages: 'User signed up in successfully',
        data: token
    }
};

export const noContentResponse = {
    status: 204,
    response: {
        code: 204,
        status: 'Created',
        messages: 'User signed up in successfully',
        data: token
    }
};

export const conflictResponse = {
    status: 409,
    response: {
        code: 409,
        status: 'Conflict',
        messages: 'User exists on the platform',
        data: token
    }
}

export const badRequestResponse = {
    status: 400,
    response: {
        code: 400,
        status: 'Bad Request',
        messages: 'Invalid credentials',
        data: token
    }
}
