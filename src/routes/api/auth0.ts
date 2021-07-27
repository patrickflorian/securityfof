import { User } from "@classes/User";
import { API_URL } from "@routes/api";

export const login = (email: string, password: string) => {
    return fetch(API_URL + '/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}

export const logout = () => {
    return fetch(API_URL + '/api/logout', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

export const signUp = (user: any) => {
    return fetch(API_URL + '/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}
