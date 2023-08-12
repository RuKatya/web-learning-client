const regexpEmail = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

const regexpSpace = new RegExp(/\s/g);
const regexpNumber = new RegExp(/\d/g);
const regexpLetter = new RegExp(/[a-zA-Z]/g);
const regexpSpecChar = new RegExp(/[!@#$%^&*]/g);
const regexpEn = new RegExp(/[^a-zA-Z0-9!@#$%^&*]/g);

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
    } else if (password.match(regexpEn)) {
        return 'Password must be only En';
    } else if (password.match(regexpSpace)) {
        return 'Password must be without spaces';
    } else if (!password.match(regexpNumber)) {
        return 'Password must include numbers';
    } else if (!password.match(regexpLetter)) {
        return 'Password must include letters';
    } else if (!password.match(regexpSpecChar)) {
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
