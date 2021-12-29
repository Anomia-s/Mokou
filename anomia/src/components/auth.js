import {
    writable
} from "svelte/store";
import { goto } from "@roxi/routify";

export let user = writable({})
export let authenticated = writable(false)
const APIEndpoint = "http://127.0.0.1:3333"

const routes = {
    auth: {

        login: "auth/login",
        register: "auth/register"

    }
}

let isAuth;

user.subscribe((value) => {
    sessionStorage.setItem('token', value.token)
    console.log("💻 user state changed.")
})
authenticated.subscribe((variable) => {
    console.log(variable)
    isAuth = variable
    console.log("💻 Authenticated state changed.")
})
export function auth() {

}

export function register(username, password) {
    if (isAuth) {
        return false;
    }
    fetch(`${APIEndpoint}/${routes.auth.register}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username,
            password
        })
    }).then(response => {
        return response.json()
    }).then((data) => {
        if (data.error === true) {
            console.log('💻 Error!')
            console.log(data)
        }


    });

    console.log('💻 Request done.')

}

export function logIn(username, password) {
    if (isAuth) {
        return false;
    }
    fetch(`${APIEndpoint}/${routes.auth.login}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username,
            password
        })
    }).then(response => {
        return response.json()
    }).then((data) => {
        console.log('💻 Authenticated, setting token...')
        authenticated.set(true)
        user.set({
            username: username,
            token: data.token.token
        })

        sessionStorage.setItem('token', data.token.token)
        goto('./index')
    })
}