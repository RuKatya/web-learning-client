// May be need new regex for email
const regexpEmail = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    // /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
);

const regexpSpace = new RegExp(/\s/g);
const regexpNumber = new RegExp(/\d/g);
const regexpLetter = new RegExp(/[a-zA-Z]/g);
const regexpSpecChar = new RegExp(/[!@#$%^&*]/g);
// MAYBE NEED NEW REGEX FOR EN
const regexpEn = new RegExp(/[^a-zA-Z0-9]/g);

export const validateName = (name: string) => {
    if (!name) {
        return "Name can't be empty";
    } else if (name.length < 2) {
        return 'Name must be minimum 2 symbols';
    } else if (name.length > 25) {
        return 'Name must be maximum 25 symbols';
    }
    return '';
};
export const validateEmail = (email: string) => {
    if (!email) {
        return "Email can't be empty";
    } else if (!regexpEmail.test(email)) {
        return 'Incorrect email';
    }
    return '';
};

export const validatePassword = (password: string) => {
    if (!password) {
        return "Password can't be empty";
    } else if (password.length < 6) {
        return 'Password must be minimum 6 symbols';
    } else if (!regexpEn.test(password)) {
        return 'Password must be only En';
    } else if (regexpSpace.test(password)) {
        return 'Password must be without spaces';
    } else if (!regexpNumber.test(password)) {
        return 'Password must include numbers';
    } else if (!regexpLetter.test(password)) {
        return 'Password must include letters';
    } else if (!regexpSpecChar.test(password)) {
        return 'Password must include one character like !@#$%^&*';
    }
    return '';
};
export const validateSimilarityPass =
    (password: string) => (retryPass: string) => {
        if (password !== retryPass) {
            return 'Passwords are not the same';
        }
        return '';
    };
