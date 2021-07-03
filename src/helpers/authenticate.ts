/**
 * @author Noumbissi patrick
 * fonctions permettant de savoir quel type d'utilisateur est connecté et de controller les variables de sessions
 */
import {User} from '../classes/User'


/**
 * @function isAdmin
 * @argument User
 * @description function permettant de verifier si l'utilisateur courant est l'administrateur
 * @returns true|false
 */
export function isAdmin (user) {
    
    return false;
}
/**
 * @function isEntreprise
 * @argument User
 * @description function permettant de verifier si l'utilisateur courant est l'administrateur
 * @returns true|false
 */
export function isEntreprise (){
    
    return false;
}

/**
 * @function isUser
 * @argument User
 * @description function permettant de verifier si l'utilisateur courant est un simple utilisateur
 * @returns true|false
 */
export function isUser (){
    
    return false;
}

/**
 * @function isBank
 * @argument User
 * @description function permettant de verifier si l'utilisateur courant est une Banque
 * @returns true|false
 */
export function isBank (){
    
    return false;
}

/**
 * @function isProvider
 * @argument User
 * @description function permettant de verifier si l'utilisateur courant est un fournisseur
 * @returns true|false
 */
export function isProvider (){
    
    return false;
}

/**
 * @function isAdmin
 * @argument User
 * @description function permettant de verifier si la session est tjrs active
 * @returns true|false
 */
export function sessionExpire (){
    
    return false;
}