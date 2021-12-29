import {
    writable
} from "svelte/store";

export const user = writable({})
export const authenticated = writable(false)
export const APIEndpoint = "http://127.0.0.1:3333"

export const routes = {
    auth: {

        login: "auth/login",
        register: "auth/register",
        check: "auth/check",

    }
}

let isAuth;

const token = sessionStorage.getItem('token')
const userData = sessionStorage.getItem('user')

user.set(userData)

if (token) {
    authenticated.set(true)
}
user.subscribe((value) => {
    sessionStorage.setItem('user', `{"id": ${value.id}}`)
    console.log("💻 user state changed.")
    console.log(value)
})
authenticated.subscribe((variable) => {
    console.log(variable)
    isAuth = variable
    console.log("💻 Authenticated state changed.")
})


export function logOut() {
    console.log('Logigng out.')
    user.set({})
    authenticated.set(false)
    sessionStorage.removeItem('token')
}
export function register(username, password) {
    console.log('Starting registration')
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
    console.log('Starting logging')
    if (isAuth) {
        console.log('User is logged in fuck you')
        return false;
    } 
    console.log('User is not logged in..')
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
        console.log('response obtained, parsing...')
        return response.json()
    }).then((data) => {
        console.log('💻 Authenticated, setting token...')
        authenticated.set(true)
        console.log('logging complete')
        user.set({
            data
        })

        sessionStorage.setItem('token', data.token.token)
    })
}