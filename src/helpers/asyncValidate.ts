/**
 * validation utilisant les données venues du serveur distant
 * @param {*} ms 
 */

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = values => {
    return sleep(1000).then(() => {                
        if (!['hoang', 'hoangnd', 'ndhoang'].includes(values.username)) {            
            throw { username: 'User does not exist' };            
        }                 
    });
};
export default asyncValidate;