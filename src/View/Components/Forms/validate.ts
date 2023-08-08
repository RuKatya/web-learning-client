const regexEmail = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
const regexPassword = new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$'
);

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
    } else if (!regexEmail.test(email)) {
        return 'Incorrect email';
    }
    return '';
};

export const validatePassword = (password: string) => {
    if (!password) {
        return "Password can't be empty";
    } else if (password.length < 6) {
        return 'Password must be minimum 6 symbols';
    } else if (!regexPassword.test(password)) {
        return 'Password must be without spaces, include letters, numbers, one special character !@#$%^&*';
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
