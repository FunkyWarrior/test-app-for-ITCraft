export const logInValidator = values => {
    const errors = {};
    if (!values.login) {
        errors.login = "required";
    } else if(values.login.length < 8) errors.login = `minimum 8 characters required, now ${values.login.length}`;

    if (!values.password) {
        errors.password = "required";
    }else if(values.password.length < 8) errors.password = `minimum 8 characters required, now ${values.password.length}`;
    return errors;
};
