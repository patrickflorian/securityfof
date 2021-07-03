/**
 * validation des champs d'un formulaire
 * @param {*} values 
 */

const validate = values => {
    const errors = {};
    if (!values.username || values.username ==='') {
        errors.username = 'Required';
    }
    if (!values.password || values.password ==='') {
        errors.password = 'Required';
    }
    return errors;
};

export default validate;