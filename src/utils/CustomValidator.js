import validator from 'validator';

export const genericValidator = (data) => {
    return !validator.isEmpty(data);
}

export const emailValidator = (email) => {
    return validator.isEmail(email);
}

export const passwordValidator = (password, confirmPassword) => {
    return validator.matches(password, confirmPassword);
}

export const phoneNumberValidator = (phoneNumber) => {
    return validator.isNumeric(phoneNumber, {no_symbols: false});
}