import { User } from "@classes/User"
import { Alert } from "react-native"
import { API_URL } from "."

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

export const signUp = (user: User) => {
    return fetch(API_URL + '/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}
