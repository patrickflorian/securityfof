import { User } from "@classes/User"
import { API_URL } from "."

const MAIN_URL = API_URL + '/api/users';

export const all = () => {
    return fetch(MAIN_URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    });
}

export const edit = (user: User) => {
    return fetch(MAIN_URL + '/edit', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}
